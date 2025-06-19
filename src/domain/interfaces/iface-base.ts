import { Either, right } from 'fp-ts/Either';
import { DataType, IfaceInfo } from '../../protos/ciot/proto/v2/iface';
import { MsgData } from '../../protos/ciot/proto/v2/msg_data';
import { ErrorBase } from '../../errors/error-base';
import { Msg } from '../../protos/ciot/proto/v2/msg';
import { Iface } from './iface';
import { Event } from '../../protos/ciot/proto/v2/event';


export abstract class IfaceBase implements Iface {
  private _eventsQueue: Event[] = [];
  private _eventsResolve: (() => void) | null = null;

  abstract readonly onEvent: AsyncIterable<Event>;
  abstract readonly info: IfaceInfo;
  abstract getData(data: MsgData): Promise<Either<ErrorBase, MsgData>>;
  abstract processData(data: MsgData): Promise<Either<ErrorBase, MsgData>>;
  abstract sendData(data: Uint8Array): Promise<Either<ErrorBase, Uint8Array>>;

  async sendMsg(msg: Msg): Promise<Either<ErrorBase, Msg>> {
    const result = await this.sendData(Msg.toBinary(msg));
      return result._tag === 'Right'
          ? right(Msg.fromBinary(result.right))
          : result as Either<ErrorBase, Msg>
          ;
  }

  requestData(info: IfaceInfo, type: DataType): Promise<Either<ErrorBase, Msg>> {
    const requestMsg = Msg.create({
      iface: info,
      data: MsgData.create({
        type: { oneofKind: "getData", getData: { type } },
      }),
    });
    return this.sendMsg(requestMsg);
  }

  abstract stop(): Promise<Either<ErrorBase, void>>;

  protected emitEvent(event: Event) {
    this._eventsQueue.push(event);
    if (this._eventsResolve) {
      this._eventsResolve();
      this._eventsResolve = null;
    }
  }

  protected async *createEventAsyncIterable(): AsyncIterable<Event> {
    while (true) {
      // Enquanto não tiver eventos, espera
      while (this._eventsQueue.length === 0) {
        await new Promise<void>(resolve => this._eventsResolve = resolve);
      }

      // Pega o próximo evento da fila e emite
      const event = this._eventsQueue.shift()!;
      yield event;
    }
  }
}
