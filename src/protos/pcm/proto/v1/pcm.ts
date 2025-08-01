// @generated by protobuf-ts 2.11.1
// @generated from protobuf file "pcm/proto/v1/pcm.proto" (package "Pcm", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * PCM request data
 *
 * @generated from protobuf message Pcm.Req
 */
export interface Req {
    /**
     * @generated from protobuf field: uint64 t = 1
     */
    t: bigint; // Timestamp
    /**
     * @generated from protobuf field: uint32 id = 2
     */
    id: number; // Request id
    /**
     * @generated from protobuf field: Pcm.ReqType type = 3
     */
    type: ReqType; // Request type
    /**
     * @generated from protobuf field: uint32 protocol = 4
     */
    protocol: number; // Protocol version
    /**
     * @generated from protobuf field: uint32 timeout = 5
     */
    timeout: number; // Request timeout
    /**
     * @generated from protobuf field: bytes ble_hdr_mac = 7
     */
    bleHdrMac: Uint8Array; // Target device ble hedro mac address
    /**
     * @generated from protobuf field: bytes ble_original_mac = 6
     */
    bleOriginalMac: Uint8Array; // Target device ble original mac address
    /**
     * @generated from protobuf field: bytes content = 8
     */
    content: Uint8Array; // Request content
    /**
     * @generated from protobuf field: Pcm.ReqState state = 9
     */
    state: ReqState; // Request state
    /**
     * @generated from protobuf field: uint32 attempts = 10
     */
    attempts: number; // Attempts count
}
/**
 * PCM request acknowledge message
 *
 * @generated from protobuf message Pcm.Ack
 */
export interface Ack {
    /**
     * @generated from protobuf field: uint64 t = 1
     */
    t: bigint; // Timestamp
    /**
     * @generated from protobuf field: Pcm.AckType type = 2
     */
    type: AckType; // Ack type
    /**
     * @generated from protobuf field: Pcm.Req req = 3
     */
    req?: Req; // Request acknowledged
    /**
     * @generated from protobuf field: int32 rssi = 5
     */
    rssi: number; // Device signal strenght
    /**
     * @generated from protobuf field: bytes payload = 7
     */
    payload: Uint8Array; // Payload used to generate the ack
}
/**
 * PCM status message
 *
 * @generated from protobuf message Pcm.Status
 */
export interface Status {
    /**
     * @generated from protobuf field: uint32 acks = 1
     */
    acks: number; // ACKs queue size
    /**
     * @generated from protobuf field: uint32 reqs = 2
     */
    reqs: number; // Requests queue size
    /**
     * @generated from protobuf field: uint32 provs = 3
     */
    provs: number; // Provs waiting
    /**
     * @generated from protobuf field: uint32 cfgs = 4
     */
    cfgs: number; // Cfgs waiting
    /**
     * @generated from protobuf field: uint32 rsts = 5
     */
    rsts: number; // Resets waiting
}
/**
 * PCM request state
 *
 * @generated from protobuf enum Pcm.ReqState
 */
export enum ReqState {
    /**
     * Request is idle
     *
     * @generated from protobuf enum value: REQ_STATE_IDLE = 0;
     */
    IDLE = 0,
    /**
     * Request is waiting for an trigger adv
     *
     * @generated from protobuf enum value: REQ_STATE_WAITING_ADV = 1;
     */
    WAITING_ADV = 1,
    /**
     * Request is being processed
     *
     * @generated from protobuf enum value: REQ_STATE_PROCESSING = 2;
     */
    PROCESSING = 2,
    /**
     * The request ack is ready to be send
     *
     * @generated from protobuf enum value: REQ_STATE_SENDING_ACK = 3;
     */
    SENDING_ACK = 3
}
/**
 * PCM request type
 *
 * @generated from protobuf enum Pcm.ReqType
 */
export enum ReqType {
    /**
     * None
     *
     * @generated from protobuf enum value: REQ_TYPE_NONE = 0;
     */
    NONE = 0,
    /**
     * Provisioning request
     *
     * @generated from protobuf enum value: REQ_TYPE_PROV = 1;
     */
    PROV = 1,
    /**
     * Configuration request
     *
     * @generated from protobuf enum value: REQ_TYPE_CONFIG = 2;
     */
    CONFIG = 2,
    /**
     * Reset request
     *
     * @generated from protobuf enum value: REQ_TYPE_RESET = 3;
     */
    RESET = 3,
    /**
     * DFU request
     *
     * @generated from protobuf enum value: REQ_TYPE_DFU = 4;
     */
    DFU = 4,
    /**
     * Restart request
     *
     * @generated from protobuf enum value: REQ_TYPE_RESTART = 5;
     */
    RESTART = 5
}
/**
 * PCM ack type
 *
 * @generated from protobuf enum Pcm.AckType
 */
export enum AckType {
    /**
     * None
     *
     * @generated from protobuf enum value: ACK_TYPE_NONE = 0;
     */
    NONE = 0,
    /**
     * Request received
     *
     * @generated from protobuf enum value: ACK_TYPE_RECV = 1;
     */
    RECV = 1,
    /**
     * Request done
     *
     * @generated from protobuf enum value: ACK_TYPE_DONE = 2;
     */
    DONE = 2,
    /**
     * Request timeout triggered
     *
     * @generated from protobuf enum value: ACK_TYPE_TIMEOUT = 3;
     */
    TIMEOUT = 3,
    /**
     * PCM queue is full
     *
     * @generated from protobuf enum value: ACK_TYPE_BUSY = 4;
     */
    BUSY = 4,
    /**
     * Error ocourred processing request
     *
     * @generated from protobuf enum value: ACK_TYPE_ERROR = 5;
     */
    ERROR = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class Req$Type extends MessageType<Req> {
    constructor() {
        super("Pcm.Req", [
            { no: 1, name: "t", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "type", kind: "enum", T: () => ["Pcm.ReqType", ReqType, "REQ_TYPE_"] },
            { no: 4, name: "protocol", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "timeout", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "ble_hdr_mac", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 6, name: "ble_original_mac", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 8, name: "content", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 9, name: "state", kind: "enum", T: () => ["Pcm.ReqState", ReqState, "REQ_STATE_"] },
            { no: 10, name: "attempts", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<Req>): Req {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.t = 0n;
        message.id = 0;
        message.type = 0;
        message.protocol = 0;
        message.timeout = 0;
        message.bleHdrMac = new Uint8Array(0);
        message.bleOriginalMac = new Uint8Array(0);
        message.content = new Uint8Array(0);
        message.state = 0;
        message.attempts = 0;
        if (value !== undefined)
            reflectionMergePartial<Req>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Req): Req {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 t */ 1:
                    message.t = reader.uint64().toBigInt();
                    break;
                case /* uint32 id */ 2:
                    message.id = reader.uint32();
                    break;
                case /* Pcm.ReqType type */ 3:
                    message.type = reader.int32();
                    break;
                case /* uint32 protocol */ 4:
                    message.protocol = reader.uint32();
                    break;
                case /* uint32 timeout */ 5:
                    message.timeout = reader.uint32();
                    break;
                case /* bytes ble_hdr_mac */ 7:
                    message.bleHdrMac = reader.bytes();
                    break;
                case /* bytes ble_original_mac */ 6:
                    message.bleOriginalMac = reader.bytes();
                    break;
                case /* bytes content */ 8:
                    message.content = reader.bytes();
                    break;
                case /* Pcm.ReqState state */ 9:
                    message.state = reader.int32();
                    break;
                case /* uint32 attempts */ 10:
                    message.attempts = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Req, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 t = 1; */
        if (message.t !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.t);
        /* uint32 id = 2; */
        if (message.id !== 0)
            writer.tag(2, WireType.Varint).uint32(message.id);
        /* Pcm.ReqType type = 3; */
        if (message.type !== 0)
            writer.tag(3, WireType.Varint).int32(message.type);
        /* uint32 protocol = 4; */
        if (message.protocol !== 0)
            writer.tag(4, WireType.Varint).uint32(message.protocol);
        /* uint32 timeout = 5; */
        if (message.timeout !== 0)
            writer.tag(5, WireType.Varint).uint32(message.timeout);
        /* bytes ble_original_mac = 6; */
        if (message.bleOriginalMac.length)
            writer.tag(6, WireType.LengthDelimited).bytes(message.bleOriginalMac);
        /* bytes ble_hdr_mac = 7; */
        if (message.bleHdrMac.length)
            writer.tag(7, WireType.LengthDelimited).bytes(message.bleHdrMac);
        /* bytes content = 8; */
        if (message.content.length)
            writer.tag(8, WireType.LengthDelimited).bytes(message.content);
        /* Pcm.ReqState state = 9; */
        if (message.state !== 0)
            writer.tag(9, WireType.Varint).int32(message.state);
        /* uint32 attempts = 10; */
        if (message.attempts !== 0)
            writer.tag(10, WireType.Varint).uint32(message.attempts);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Pcm.Req
 */
export const Req = new Req$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Ack$Type extends MessageType<Ack> {
    constructor() {
        super("Pcm.Ack", [
            { no: 1, name: "t", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "type", kind: "enum", T: () => ["Pcm.AckType", AckType, "ACK_TYPE_"] },
            { no: 3, name: "req", kind: "message", T: () => Req },
            { no: 5, name: "rssi", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "payload", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<Ack>): Ack {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.t = 0n;
        message.type = 0;
        message.rssi = 0;
        message.payload = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<Ack>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Ack): Ack {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 t */ 1:
                    message.t = reader.uint64().toBigInt();
                    break;
                case /* Pcm.AckType type */ 2:
                    message.type = reader.int32();
                    break;
                case /* Pcm.Req req */ 3:
                    message.req = Req.internalBinaryRead(reader, reader.uint32(), options, message.req);
                    break;
                case /* int32 rssi */ 5:
                    message.rssi = reader.int32();
                    break;
                case /* bytes payload */ 7:
                    message.payload = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Ack, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 t = 1; */
        if (message.t !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.t);
        /* Pcm.AckType type = 2; */
        if (message.type !== 0)
            writer.tag(2, WireType.Varint).int32(message.type);
        /* Pcm.Req req = 3; */
        if (message.req)
            Req.internalBinaryWrite(message.req, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* int32 rssi = 5; */
        if (message.rssi !== 0)
            writer.tag(5, WireType.Varint).int32(message.rssi);
        /* bytes payload = 7; */
        if (message.payload.length)
            writer.tag(7, WireType.LengthDelimited).bytes(message.payload);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Pcm.Ack
 */
export const Ack = new Ack$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Status$Type extends MessageType<Status> {
    constructor() {
        super("Pcm.Status", [
            { no: 1, name: "acks", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "reqs", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "provs", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "cfgs", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "rsts", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<Status>): Status {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.acks = 0;
        message.reqs = 0;
        message.provs = 0;
        message.cfgs = 0;
        message.rsts = 0;
        if (value !== undefined)
            reflectionMergePartial<Status>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Status): Status {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 acks */ 1:
                    message.acks = reader.uint32();
                    break;
                case /* uint32 reqs */ 2:
                    message.reqs = reader.uint32();
                    break;
                case /* uint32 provs */ 3:
                    message.provs = reader.uint32();
                    break;
                case /* uint32 cfgs */ 4:
                    message.cfgs = reader.uint32();
                    break;
                case /* uint32 rsts */ 5:
                    message.rsts = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Status, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 acks = 1; */
        if (message.acks !== 0)
            writer.tag(1, WireType.Varint).uint32(message.acks);
        /* uint32 reqs = 2; */
        if (message.reqs !== 0)
            writer.tag(2, WireType.Varint).uint32(message.reqs);
        /* uint32 provs = 3; */
        if (message.provs !== 0)
            writer.tag(3, WireType.Varint).uint32(message.provs);
        /* uint32 cfgs = 4; */
        if (message.cfgs !== 0)
            writer.tag(4, WireType.Varint).uint32(message.cfgs);
        /* uint32 rsts = 5; */
        if (message.rsts !== 0)
            writer.tag(5, WireType.Varint).uint32(message.rsts);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Pcm.Status
 */
export const Status = new Status$Type();
