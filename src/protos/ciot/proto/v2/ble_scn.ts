// @generated by protobuf-ts 2.11.1
// @generated from protobuf file "ciot/proto/v2/ble_scn.proto" (package "Ciot", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Err } from "./errors";
/**
 * Ble scanner stop message
 *
 * @generated from protobuf message Ciot.BleScnStop
 */
export interface BleScnStop {
}
/**
 * Ble scanner configuration
 *
 * @generated from protobuf message Ciot.BleScnCfg
 */
export interface BleScnCfg {
    /**
     * Scanner interval
     *
     * @generated from protobuf field: uint32 interval = 1
     */
    interval: number;
    /**
     * Scanner window
     *
     * @generated from protobuf field: uint32 window = 2
     */
    window: number;
    /**
     * Scanner timeout
     *
     * @generated from protobuf field: uint32 timeout = 3
     */
    timeout: number;
    /**
     * Enable/disable active scan mode
     *
     * @generated from protobuf field: bool active = 4
     */
    active: boolean;
    /**
     * Enable/disable bridge. On bridge mode ciot lib dosen't interpret adv
     * messages as an CioT requests and send all of them to the main application
     * as an data message.
     *
     * @generated from protobuf field: bool bridge_mode = 5
     */
    bridgeMode: boolean;
}
/**
 * Ble scanner advertisement information
 *
 * @generated from protobuf message Ciot.BleScnAdvInfo
 */
export interface BleScnAdvInfo {
    /**
     * Device mac
     *
     * @generated from protobuf field: bytes mac = 1
     */
    mac: Uint8Array;
    /**
     * Signal strenght
     *
     * @generated from protobuf field: sint32 rssi = 2
     */
    rssi: number;
}
/**
 * Ble scanner advertisement
 *
 * @generated from protobuf message Ciot.BleScnAdv
 */
export interface BleScnAdv {
    /**
     * Advertisement information
     *
     * @generated from protobuf field: Ciot.BleScnAdvInfo info = 1
     */
    info?: BleScnAdvInfo;
    /**
     * Advertisement payload
     *
     * @generated from protobuf field: bytes payload = 2
     */
    payload: Uint8Array;
}
/**
 * Ble scanner status
 *
 * @generated from protobuf message Ciot.BleScnStatus
 */
export interface BleScnStatus {
    /**
     * Current state
     *
     * @generated from protobuf field: Ciot.BleScnState state = 1
     */
    state: BleScnState;
    /**
     * Current error code
     *
     * @generated from protobuf field: Ciot.Err err_code = 2
     */
    errCode: Err;
    /**
     * ADVs counter
     *
     * @generated from protobuf field: uint32 advs_losted = 3
     */
    advsLosted: number;
    /**
     * Current fifo lenght
     *
     * @generated from protobuf field: uint32 fifo_len = 4
     */
    fifoLen: number;
    /**
     * Fifo maximum size
     *
     * @generated from protobuf field: uint32 fifo_max = 5
     */
    fifoMax: number;
}
/**
 * Ble scanner request
 *
 * @generated from protobuf message Ciot.BleScnReq
 */
export interface BleScnReq {
}
/**
 * Ble scanner data
 *
 * @generated from protobuf message Ciot.BleScnData
 */
export interface BleScnData {
    /**
     * @generated from protobuf oneof: type
     */
    type: {
        oneofKind: "stop";
        /**
         * Stop ble scanner interface
         *
         * @generated from protobuf field: Ciot.BleScnStop stop = 1
         */
        stop: BleScnStop;
    } | {
        oneofKind: "config";
        /**
         * Configuration
         *
         * @generated from protobuf field: Ciot.BleScnCfg config = 2
         */
        config: BleScnCfg;
    } | {
        oneofKind: "status";
        /**
         * Status
         *
         * @generated from protobuf field: Ciot.BleScnStatus status = 3
         */
        status: BleScnStatus;
    } | {
        oneofKind: "request";
        /**
         * Request
         *
         * @generated from protobuf field: Ciot.BleScnReq request = 4
         */
        request: BleScnReq;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Possible ble scanner states
 *
 * @generated from protobuf enum Ciot.BleScnState
 */
export enum BleScnState {
    /**
     * Idle state
     *
     * @generated from protobuf enum value: BLE_SCN_STATE_IDLE = 0;
     */
    IDLE = 0,
    /**
     * Passive scan enabled
     *
     * @generated from protobuf enum value: BLE_SCN_STATE_PASSIVE = 1;
     */
    PASSIVE = 1,
    /**
     * Active scan enabled
     *
     * @generated from protobuf enum value: BLE_SCN_STATE_ACTIVE = 2;
     */
    ACTIVE = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class BleScnStop$Type extends MessageType<BleScnStop> {
    constructor() {
        super("Ciot.BleScnStop", []);
    }
    create(value?: PartialMessage<BleScnStop>): BleScnStop {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<BleScnStop>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleScnStop): BleScnStop {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
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
    internalBinaryWrite(message: BleScnStop, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleScnStop
 */
export const BleScnStop = new BleScnStop$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleScnCfg$Type extends MessageType<BleScnCfg> {
    constructor() {
        super("Ciot.BleScnCfg", [
            { no: 1, name: "interval", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "window", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "timeout", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "active", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "bridge_mode", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<BleScnCfg>): BleScnCfg {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.interval = 0;
        message.window = 0;
        message.timeout = 0;
        message.active = false;
        message.bridgeMode = false;
        if (value !== undefined)
            reflectionMergePartial<BleScnCfg>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleScnCfg): BleScnCfg {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 interval */ 1:
                    message.interval = reader.uint32();
                    break;
                case /* uint32 window */ 2:
                    message.window = reader.uint32();
                    break;
                case /* uint32 timeout */ 3:
                    message.timeout = reader.uint32();
                    break;
                case /* bool active */ 4:
                    message.active = reader.bool();
                    break;
                case /* bool bridge_mode */ 5:
                    message.bridgeMode = reader.bool();
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
    internalBinaryWrite(message: BleScnCfg, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 interval = 1; */
        if (message.interval !== 0)
            writer.tag(1, WireType.Varint).uint32(message.interval);
        /* uint32 window = 2; */
        if (message.window !== 0)
            writer.tag(2, WireType.Varint).uint32(message.window);
        /* uint32 timeout = 3; */
        if (message.timeout !== 0)
            writer.tag(3, WireType.Varint).uint32(message.timeout);
        /* bool active = 4; */
        if (message.active !== false)
            writer.tag(4, WireType.Varint).bool(message.active);
        /* bool bridge_mode = 5; */
        if (message.bridgeMode !== false)
            writer.tag(5, WireType.Varint).bool(message.bridgeMode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleScnCfg
 */
export const BleScnCfg = new BleScnCfg$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleScnAdvInfo$Type extends MessageType<BleScnAdvInfo> {
    constructor() {
        super("Ciot.BleScnAdvInfo", [
            { no: 1, name: "mac", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "rssi", kind: "scalar", T: 17 /*ScalarType.SINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BleScnAdvInfo>): BleScnAdvInfo {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.mac = new Uint8Array(0);
        message.rssi = 0;
        if (value !== undefined)
            reflectionMergePartial<BleScnAdvInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleScnAdvInfo): BleScnAdvInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes mac */ 1:
                    message.mac = reader.bytes();
                    break;
                case /* sint32 rssi */ 2:
                    message.rssi = reader.sint32();
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
    internalBinaryWrite(message: BleScnAdvInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes mac = 1; */
        if (message.mac.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.mac);
        /* sint32 rssi = 2; */
        if (message.rssi !== 0)
            writer.tag(2, WireType.Varint).sint32(message.rssi);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleScnAdvInfo
 */
export const BleScnAdvInfo = new BleScnAdvInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleScnAdv$Type extends MessageType<BleScnAdv> {
    constructor() {
        super("Ciot.BleScnAdv", [
            { no: 1, name: "info", kind: "message", T: () => BleScnAdvInfo },
            { no: 2, name: "payload", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<BleScnAdv>): BleScnAdv {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.payload = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<BleScnAdv>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleScnAdv): BleScnAdv {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Ciot.BleScnAdvInfo info */ 1:
                    message.info = BleScnAdvInfo.internalBinaryRead(reader, reader.uint32(), options, message.info);
                    break;
                case /* bytes payload */ 2:
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
    internalBinaryWrite(message: BleScnAdv, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Ciot.BleScnAdvInfo info = 1; */
        if (message.info)
            BleScnAdvInfo.internalBinaryWrite(message.info, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bytes payload = 2; */
        if (message.payload.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.payload);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleScnAdv
 */
export const BleScnAdv = new BleScnAdv$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleScnStatus$Type extends MessageType<BleScnStatus> {
    constructor() {
        super("Ciot.BleScnStatus", [
            { no: 1, name: "state", kind: "enum", T: () => ["Ciot.BleScnState", BleScnState, "BLE_SCN_STATE_"] },
            { no: 2, name: "err_code", kind: "enum", T: () => ["Ciot.Err", Err, "ERR_"] },
            { no: 3, name: "advs_losted", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "fifo_len", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "fifo_max", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BleScnStatus>): BleScnStatus {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.state = 0;
        message.errCode = 0;
        message.advsLosted = 0;
        message.fifoLen = 0;
        message.fifoMax = 0;
        if (value !== undefined)
            reflectionMergePartial<BleScnStatus>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleScnStatus): BleScnStatus {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Ciot.BleScnState state */ 1:
                    message.state = reader.int32();
                    break;
                case /* Ciot.Err err_code */ 2:
                    message.errCode = reader.int32();
                    break;
                case /* uint32 advs_losted */ 3:
                    message.advsLosted = reader.uint32();
                    break;
                case /* uint32 fifo_len */ 4:
                    message.fifoLen = reader.uint32();
                    break;
                case /* uint32 fifo_max */ 5:
                    message.fifoMax = reader.uint32();
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
    internalBinaryWrite(message: BleScnStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Ciot.BleScnState state = 1; */
        if (message.state !== 0)
            writer.tag(1, WireType.Varint).int32(message.state);
        /* Ciot.Err err_code = 2; */
        if (message.errCode !== 0)
            writer.tag(2, WireType.Varint).int32(message.errCode);
        /* uint32 advs_losted = 3; */
        if (message.advsLosted !== 0)
            writer.tag(3, WireType.Varint).uint32(message.advsLosted);
        /* uint32 fifo_len = 4; */
        if (message.fifoLen !== 0)
            writer.tag(4, WireType.Varint).uint32(message.fifoLen);
        /* uint32 fifo_max = 5; */
        if (message.fifoMax !== 0)
            writer.tag(5, WireType.Varint).uint32(message.fifoMax);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleScnStatus
 */
export const BleScnStatus = new BleScnStatus$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleScnReq$Type extends MessageType<BleScnReq> {
    constructor() {
        super("Ciot.BleScnReq", []);
    }
    create(value?: PartialMessage<BleScnReq>): BleScnReq {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<BleScnReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleScnReq): BleScnReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
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
    internalBinaryWrite(message: BleScnReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleScnReq
 */
export const BleScnReq = new BleScnReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleScnData$Type extends MessageType<BleScnData> {
    constructor() {
        super("Ciot.BleScnData", [
            { no: 1, name: "stop", kind: "message", oneof: "type", T: () => BleScnStop },
            { no: 2, name: "config", kind: "message", oneof: "type", T: () => BleScnCfg },
            { no: 3, name: "status", kind: "message", oneof: "type", T: () => BleScnStatus },
            { no: 4, name: "request", kind: "message", oneof: "type", T: () => BleScnReq }
        ]);
    }
    create(value?: PartialMessage<BleScnData>): BleScnData {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.type = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<BleScnData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleScnData): BleScnData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Ciot.BleScnStop stop */ 1:
                    message.type = {
                        oneofKind: "stop",
                        stop: BleScnStop.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).stop)
                    };
                    break;
                case /* Ciot.BleScnCfg config */ 2:
                    message.type = {
                        oneofKind: "config",
                        config: BleScnCfg.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).config)
                    };
                    break;
                case /* Ciot.BleScnStatus status */ 3:
                    message.type = {
                        oneofKind: "status",
                        status: BleScnStatus.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).status)
                    };
                    break;
                case /* Ciot.BleScnReq request */ 4:
                    message.type = {
                        oneofKind: "request",
                        request: BleScnReq.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).request)
                    };
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
    internalBinaryWrite(message: BleScnData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Ciot.BleScnStop stop = 1; */
        if (message.type.oneofKind === "stop")
            BleScnStop.internalBinaryWrite(message.type.stop, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.BleScnCfg config = 2; */
        if (message.type.oneofKind === "config")
            BleScnCfg.internalBinaryWrite(message.type.config, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.BleScnStatus status = 3; */
        if (message.type.oneofKind === "status")
            BleScnStatus.internalBinaryWrite(message.type.status, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.BleScnReq request = 4; */
        if (message.type.oneofKind === "request")
            BleScnReq.internalBinaryWrite(message.type.request, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleScnData
 */
export const BleScnData = new BleScnData$Type();
