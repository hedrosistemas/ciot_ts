import { Either, right, left } from 'fp-ts/lib/Either';
import { IfaceBase } from '../../domain/interfaces/iface-base';
import { ErrorBase } from '../../errors/error-base';
import { ErrorInvalidType } from '../../errors/error-invalid-type';
import { ErrorNotImplemented } from '../../errors/error-not-implemented';
import { ErrorInvalidConfig } from '../../errors/error-invalid-config';
import { ErrorException } from '../../errors/error-exception'; 
import { IfaceInfo } from '../../protos/ciot/proto/v2/iface';
import { MsgData } from '../../protos/ciot/proto/v2/msg_data';
import { HttpClientCfg, HttpClientMethod, HttpClientStatus } from '../../protos/ciot/proto/v2/http_client';
import { Event, EventType } from '../../protos/ciot/proto/v2/event';

export class HttpClient extends IfaceBase {
    onEvent: AsyncIterable<Event>;
    info: IfaceInfo;
    _status: HttpClientStatus;
    _cfg?: HttpClientCfg;

    constructor(info: IfaceInfo) {
        super();
        this.info = info;
        this._status = HttpClientStatus.create();
        this.onEvent = this.createEventAsyncIterable();
    }

    async start(config: HttpClientCfg): Promise<Either<ErrorBase, void>> {
        this._cfg = config;
        const event = Event.create({ type: EventType.STARTED });
        this.emitEvent(event);
        return Promise.resolve(right(undefined));
    }

    stop(): Promise<Either<ErrorBase, void>> {
        throw new Error('Method not implemented.');
    }

    getData(data: MsgData): Promise<Either<ErrorBase, MsgData>> {
        if(data.type.oneofKind != 'httpClient')
        {
            return Promise.resolve(left(new ErrorInvalidType()));
        }

        switch (data.type.httpClient.type.oneofKind) {
            case 'config':
                data.type.httpClient.type.config = this._cfg ?? HttpClientCfg.create();
                break;
            case 'status':
                data.type.httpClient.type.status = this._status;
                break;
            default:
                return Promise.resolve(left(new ErrorInvalidType()));
        }

        return Promise.resolve(right(data));
    }

    processData(data: MsgData): Promise<Either<ErrorBase, MsgData>> {
        if(data.type.oneofKind != 'httpClient')
        {
            return Promise.resolve(left(new ErrorInvalidType()));
        }

        switch (data.type.httpClient.type.oneofKind) {
            case 'config':
                this.start(data.type.httpClient.type.config);
                break;
            case 'request':
                return Promise.resolve(left(new ErrorNotImplemented()));
            default:
                return Promise.resolve(left(new ErrorInvalidType()));
        }

        return Promise.resolve(right(data));
    }

    async sendData(data: Uint8Array): Promise<Either<ErrorBase, Uint8Array>> {
        if(this._cfg == null) return Promise.resolve(left(new ErrorInvalidConfig()));
        try {
            const response = await fetch(this._cfg.url, {
                method: this.httpClientMethodToString(this._cfg.method),
                body: data
            });
            return Promise.resolve(right(await response.bytes()));
        } catch (error) {
            return Promise.resolve(left(new ErrorException(error)));
        }
    }

    httpClientMethodToString(method: HttpClientMethod) : string {
        switch (method) {
            case HttpClientMethod.HTTP_METHOD_GET:
                return 'GET';
            case HttpClientMethod.HTTP_METHOD_POST:
                return 'POST';
            case HttpClientMethod.HTTP_METHOD_PUT:
                return 'PUT';
            case HttpClientMethod.HTTP_METHOD_PATCH:
                return 'PATCH';
            case HttpClientMethod.HTTP_METHOD_DELETE:
                return 'DELETE';
            case HttpClientMethod.HTTP_METHOD_HEAD:
                return 'HEAD';
            case HttpClientMethod.HTTP_METHOD_NOTIFY:
                return 'NOTIFY';
            case HttpClientMethod.HTTP_METHOD_SUBSCRIBE:
                return 'SUBSCRIBE';
            case HttpClientMethod.HTTP_METHOD_UNSUBSCRIBE:
                return 'UNSUBSCRIBE';
            case HttpClientMethod.HTTP_METHOD_OPTIONS:
                return 'OPTIONS';
            case HttpClientMethod.HTTP_METHOD_COPY:
                return 'COPY';
            case HttpClientMethod.HTTP_METHOD_MOVE:
                return 'MOVE';
            case HttpClientMethod.HTTP_METHOD_LOCK:
                return 'LOCK';
            case HttpClientMethod.HTTP_METHOD_UNLOCK:
                return 'UNLOCK';
            case HttpClientMethod.HTTP_METHOD_PROPFIND:
                return 'PROPFIND';
            case HttpClientMethod.HTTP_METHOD_PROPPATCH:
                return 'PROPPATCH';
            case HttpClientMethod.HTTP_METHOD_MKCOL:
                return 'MKCOL';
            case HttpClientMethod.HTTP_METHOD_MAX:
                return 'MAX';
            default:
                return 'GET';
        }
    }
}
