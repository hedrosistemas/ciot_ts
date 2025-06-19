import { ErrorBase } from '../../errors/error-base';
import { Msg } from '../../protos/ciot/proto/v2/msg'
import { IfaceInfo } from '../../protos/ciot/proto/v2/iface'
import { MsgData } from '../../protos/ciot/proto/v2/msg_data';
import { Either } from 'fp-ts/Either'; 
import { Event } from '../../protos/ciot/proto/v2/event';

export interface Iface {
  readonly onEvent: AsyncIterable<Event>;
  readonly info: IfaceInfo;

  stop(): Promise<Either<ErrorBase, void>>;
  processData(data: MsgData): Promise<Either<ErrorBase, MsgData>>;
  sendData(data: Uint8Array): Promise<Either<ErrorBase, Uint8Array>>;
  sendMsg(msg: Msg): Promise<Either<ErrorBase, Msg>>;
  getData(data: MsgData): Promise<Either<ErrorBase, MsgData>>;
}