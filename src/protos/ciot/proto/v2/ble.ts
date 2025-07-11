// @generated by protobuf-ts 2.11.1
// @generated from protobuf file "ciot/proto/v2/ble.proto" (package "Ciot", syntax proto3)
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
/**
 * Bluetooth stop
 *
 * @generated from protobuf message Ciot.BleStop
 */
export interface BleStop {
}
/**
 * Bluetooth module configuration
 *
 * @generated from protobuf message Ciot.BleCfg
 */
export interface BleCfg {
    /**
     * @generated from protobuf field: bytes mac = 1
     */
    mac: Uint8Array; // Mac address. If empty, is ignored, and the hardware mac
}
/**
 * Bluetooth module information
 *
 * @generated from protobuf message Ciot.BleInfo
 */
export interface BleInfo {
    /**
     * Hardware mac address
     *
     * @generated from protobuf field: bytes hw_mac = 1
     */
    hwMac: Uint8Array;
    /**
     * Software mac address
     *
     * @generated from protobuf field: bytes sw_mac = 2
     */
    swMac: Uint8Array;
}
/**
 * Bluetooth module status
 *
 * @generated from protobuf message Ciot.BleStatus
 */
export interface BleStatus {
    /**
     * Current state
     *
     * @generated from protobuf field: Ciot.BleState state = 1
     */
    state: BleState;
    /**
     * Current error code
     *
     * @generated from protobuf field: uint32 err_code = 2
     */
    errCode: number;
    /**
     * Software mac assigned
     *
     * @generated from protobuf field: bool using_sw_mac = 3
     */
    usingSwMac: boolean;
}
/**
 * Bluetooth module request
 *
 * @generated from protobuf message Ciot.BleReq
 */
export interface BleReq {
    /**
     * @generated from protobuf oneof: type
     */
    type: {
        oneofKind: "setMac";
        /**
         * @generated from protobuf field: bytes set_mac = 1
         */
        setMac: Uint8Array;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Bluetooth module data
 *
 * @generated from protobuf message Ciot.BleData
 */
export interface BleData {
    /**
     * @generated from protobuf oneof: type
     */
    type: {
        oneofKind: "stop";
        /**
         * @generated from protobuf field: Ciot.BleStop stop = 1
         */
        stop: BleStop;
    } | {
        oneofKind: "config";
        /**
         * @generated from protobuf field: Ciot.BleCfg config = 2
         */
        config: BleCfg;
    } | {
        oneofKind: "status";
        /**
         * @generated from protobuf field: Ciot.BleStatus status = 3
         */
        status: BleStatus;
    } | {
        oneofKind: "request";
        /**
         * @generated from protobuf field: Ciot.BleReq request = 4
         */
        request: BleReq;
    } | {
        oneofKind: "info";
        /**
         * @generated from protobuf field: Ciot.BleInfo info = 6
         */
        info: BleInfo;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Possible ble states
 *
 * @generated from protobuf enum Ciot.BleState
 */
export enum BleState {
    /**
     * Idle state
     *
     * @generated from protobuf enum value: BLE_STATE_IDLE = 0;
     */
    IDLE = 0,
    /**
     * Bluetooth module started
     *
     * @generated from protobuf enum value: BLE_STATE_STARTED = 1;
     */
    STARTED = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class BleStop$Type extends MessageType<BleStop> {
    constructor() {
        super("Ciot.BleStop", []);
    }
    create(value?: PartialMessage<BleStop>): BleStop {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<BleStop>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleStop): BleStop {
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
    internalBinaryWrite(message: BleStop, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleStop
 */
export const BleStop = new BleStop$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleCfg$Type extends MessageType<BleCfg> {
    constructor() {
        super("Ciot.BleCfg", [
            { no: 1, name: "mac", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<BleCfg>): BleCfg {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.mac = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<BleCfg>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleCfg): BleCfg {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes mac */ 1:
                    message.mac = reader.bytes();
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
    internalBinaryWrite(message: BleCfg, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes mac = 1; */
        if (message.mac.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.mac);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleCfg
 */
export const BleCfg = new BleCfg$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleInfo$Type extends MessageType<BleInfo> {
    constructor() {
        super("Ciot.BleInfo", [
            { no: 1, name: "hw_mac", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "sw_mac", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<BleInfo>): BleInfo {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.hwMac = new Uint8Array(0);
        message.swMac = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<BleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleInfo): BleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes hw_mac */ 1:
                    message.hwMac = reader.bytes();
                    break;
                case /* bytes sw_mac */ 2:
                    message.swMac = reader.bytes();
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
    internalBinaryWrite(message: BleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes hw_mac = 1; */
        if (message.hwMac.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.hwMac);
        /* bytes sw_mac = 2; */
        if (message.swMac.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.swMac);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleInfo
 */
export const BleInfo = new BleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleStatus$Type extends MessageType<BleStatus> {
    constructor() {
        super("Ciot.BleStatus", [
            { no: 1, name: "state", kind: "enum", T: () => ["Ciot.BleState", BleState, "BLE_STATE_"] },
            { no: 2, name: "err_code", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "using_sw_mac", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<BleStatus>): BleStatus {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.state = 0;
        message.errCode = 0;
        message.usingSwMac = false;
        if (value !== undefined)
            reflectionMergePartial<BleStatus>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleStatus): BleStatus {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Ciot.BleState state */ 1:
                    message.state = reader.int32();
                    break;
                case /* uint32 err_code */ 2:
                    message.errCode = reader.uint32();
                    break;
                case /* bool using_sw_mac */ 3:
                    message.usingSwMac = reader.bool();
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
    internalBinaryWrite(message: BleStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Ciot.BleState state = 1; */
        if (message.state !== 0)
            writer.tag(1, WireType.Varint).int32(message.state);
        /* uint32 err_code = 2; */
        if (message.errCode !== 0)
            writer.tag(2, WireType.Varint).uint32(message.errCode);
        /* bool using_sw_mac = 3; */
        if (message.usingSwMac !== false)
            writer.tag(3, WireType.Varint).bool(message.usingSwMac);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleStatus
 */
export const BleStatus = new BleStatus$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleReq$Type extends MessageType<BleReq> {
    constructor() {
        super("Ciot.BleReq", [
            { no: 1, name: "set_mac", kind: "scalar", oneof: "type", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<BleReq>): BleReq {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.type = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<BleReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleReq): BleReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes set_mac */ 1:
                    message.type = {
                        oneofKind: "setMac",
                        setMac: reader.bytes()
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
    internalBinaryWrite(message: BleReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes set_mac = 1; */
        if (message.type.oneofKind === "setMac")
            writer.tag(1, WireType.LengthDelimited).bytes(message.type.setMac);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleReq
 */
export const BleReq = new BleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BleData$Type extends MessageType<BleData> {
    constructor() {
        super("Ciot.BleData", [
            { no: 1, name: "stop", kind: "message", oneof: "type", T: () => BleStop },
            { no: 2, name: "config", kind: "message", oneof: "type", T: () => BleCfg },
            { no: 3, name: "status", kind: "message", oneof: "type", T: () => BleStatus },
            { no: 4, name: "request", kind: "message", oneof: "type", T: () => BleReq },
            { no: 6, name: "info", kind: "message", oneof: "type", T: () => BleInfo }
        ]);
    }
    create(value?: PartialMessage<BleData>): BleData {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.type = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<BleData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BleData): BleData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Ciot.BleStop stop */ 1:
                    message.type = {
                        oneofKind: "stop",
                        stop: BleStop.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).stop)
                    };
                    break;
                case /* Ciot.BleCfg config */ 2:
                    message.type = {
                        oneofKind: "config",
                        config: BleCfg.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).config)
                    };
                    break;
                case /* Ciot.BleStatus status */ 3:
                    message.type = {
                        oneofKind: "status",
                        status: BleStatus.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).status)
                    };
                    break;
                case /* Ciot.BleReq request */ 4:
                    message.type = {
                        oneofKind: "request",
                        request: BleReq.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).request)
                    };
                    break;
                case /* Ciot.BleInfo info */ 6:
                    message.type = {
                        oneofKind: "info",
                        info: BleInfo.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).info)
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
    internalBinaryWrite(message: BleData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Ciot.BleStop stop = 1; */
        if (message.type.oneofKind === "stop")
            BleStop.internalBinaryWrite(message.type.stop, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.BleCfg config = 2; */
        if (message.type.oneofKind === "config")
            BleCfg.internalBinaryWrite(message.type.config, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.BleStatus status = 3; */
        if (message.type.oneofKind === "status")
            BleStatus.internalBinaryWrite(message.type.status, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.BleReq request = 4; */
        if (message.type.oneofKind === "request")
            BleReq.internalBinaryWrite(message.type.request, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.BleInfo info = 6; */
        if (message.type.oneofKind === "info")
            BleInfo.internalBinaryWrite(message.type.info, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.BleData
 */
export const BleData = new BleData$Type();
