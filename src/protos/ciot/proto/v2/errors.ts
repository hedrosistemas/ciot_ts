// @generated by protobuf-ts 2.11.1
// @generated from protobuf file "ciot/proto/v2/errors.proto" (package "Ciot", syntax proto3)
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
 * @generated from protobuf message Ciot.ErrData
 */
export interface ErrData {
    /**
     * @generated from protobuf field: Ciot.Err err = 1
     */
    err: Err;
}
/**
 * Error codes
 *
 * @generated from protobuf enum Ciot.Err
 */
export enum Err {
    /**
     * No error
     *
     * @generated from protobuf enum value: ERR_OK = 0;
     */
    OK = 0,
    /**
     * Null argunment
     *
     * @generated from protobuf enum value: ERR_NULL_ARG = 1;
     */
    NULL_ARG = 1,
    /**
     * Invalid ID
     *
     * @generated from protobuf enum value: ERR_INVALID_ID = 2;
     */
    INVALID_ID = 2,
    /**
     * Invalid Type
     *
     * @generated from protobuf enum value: ERR_INVALID_TYPE = 3;
     */
    INVALID_TYPE = 3,
    /**
     * Memory overflow
     *
     * @generated from protobuf enum value: ERR_OVERFLOW = 4;
     */
    OVERFLOW = 4,
    /**
     * Not implemented
     *
     * @generated from protobuf enum value: ERR_NOT_IMPLEMENTED = 5;
     */
    NOT_IMPLEMENTED = 5,
    /**
     * Not supported
     *
     * @generated from protobuf enum value: ERR_NOT_SUPPORTED = 6;
     */
    NOT_SUPPORTED = 6,
    /**
     * Busy
     *
     * @generated from protobuf enum value: ERR_BUSY = 7;
     */
    BUSY = 7,
    /**
     * Invalid state
     *
     * @generated from protobuf enum value: ERR_INVALID_STATE = 8;
     */
    INVALID_STATE = 8,
    /**
     * Serialization error
     *
     * @generated from protobuf enum value: ERR_SERIALIZATION = 9;
     */
    SERIALIZATION = 9,
    /**
     * Deserialization error
     *
     * @generated from protobuf enum value: ERR_DESERIALIZATION = 10;
     */
    DESERIALIZATION = 10,
    /**
     * Error sending data
     *
     * @generated from protobuf enum value: ERR_SEND_DATA = 11;
     */
    SEND_DATA = 11,
    /**
     * Error on data receive
     *
     * @generated from protobuf enum value: ERR_RECV_DATA = 12;
     */
    RECV_DATA = 12,
    /**
     * Invalid size
     *
     * @generated from protobuf enum value: ERR_INVALID_SIZE = 13;
     */
    INVALID_SIZE = 13,
    /**
     * Closed
     *
     * @generated from protobuf enum value: ERR_CLOSED = 14;
     */
    CLOSED = 14,
    /**
     * Resource not found
     *
     * @generated from protobuf enum value: ERR_NOT_FOUND = 15;
     */
    NOT_FOUND = 15,
    /**
     * Validation failed
     *
     * @generated from protobuf enum value: ERR_VALIDATION_FAILED = 16;
     */
    VALIDATION_FAILED = 16,
    /**
     * Connection failed
     *
     * @generated from protobuf enum value: ERR_CONNECTION = 17;
     */
    CONNECTION = 17,
    /**
     * Disconnection failed
     *
     * @generated from protobuf enum value: ERR_DISCONNECTION = 18;
     */
    DISCONNECTION = 18,
    /**
     * Unknown exception occours
     *
     * @generated from protobuf enum value: ERR_EXCEPTION = 19;
     */
    EXCEPTION = 19,
    /**
     * Invalid argument detected
     *
     * @generated from protobuf enum value: ERR_INVALID_ARG = 20;
     */
    INVALID_ARG = 20,
    /**
     * Insuficient memory
     *
     * @generated from protobuf enum value: ERR_NO_MEMORY = 21;
     */
    NO_MEMORY = 21,
    /**
     * Timeout
     *
     * @generated from protobuf enum value: ERR_TIMEOUT = 22;
     */
    TIMEOUT = 22,
    /**
     * Internal error on mongoose framework
     *
     * @generated from protobuf enum value: ERR_MONGOOSE = 23;
     */
    MONGOOSE = 23,
    /**
     * Requested operation is impossible
     *
     * @generated from protobuf enum value: ERR_IMPOSSIBLE_OP = 24;
     */
    IMPOSSIBLE_OP = 24,
    /**
     * Checksum validation error
     *
     * @generated from protobuf enum value: ERR_CHECKSUM = 25;
     */
    CHECKSUM = 25,
    /**
     * Protocol validation error
     *
     * @generated from protobuf enum value: ERR_PROTOCOL_VIOLATION = 26;
     */
    PROTOCOL_VIOLATION = 26,
    /**
     * Data loss
     *
     * @generated from protobuf enum value: ERR_DATA_LOSS = 27;
     */
    DATA_LOSS = 27,
    /**
     * Invalid message header
     *
     * @generated from protobuf enum value: ERR_INVALID_HEADER = 28;
     */
    INVALID_HEADER = 28,
    /**
     * Feature disabled
     *
     * @generated from protobuf enum value: ERR_DISABLED = 29;
     */
    DISABLED = 29,
    /**
     * Operation failed
     *
     * @generated from protobuf enum value: ERR_FAIL = 30;
     */
    FAIL = 30,
    /**
     * Invalid index
     *
     * @generated from protobuf enum value: ERR_INVALID_INDEX = 31;
     */
    INVALID_INDEX = 31,
    /**
     * Invalid key size
     *
     * @generated from protobuf enum value: ERR_INVALID_KEY_SIZE = 32;
     */
    INVALID_KEY_SIZE = 32,
    /**
     * Error reading fifo data
     *
     * @generated from protobuf enum value: ERR_FIFO_READ = 33;
     */
    FIFO_READ = 33,
    /**
     * Error writing data to fifo
     *
     * @generated from protobuf enum value: ERR_FIFO_WRITE = 34;
     */
    FIFO_WRITE = 34,
    /**
     * Invalid address
     *
     * @generated from protobuf enum value: ERR_INVALID_ADDR = 35;
     */
    INVALID_ADDR = 35,
    /**
     * Not enough resources
     *
     * @generated from protobuf enum value: ERR_RESOURCES = 36;
     */
    RESOURCES = 36,
    /**
     * Unknown error
     *
     * @generated from protobuf enum value: ERR_UNKNOWN = 37;
     */
    UNKNOWN = 37,
    /**
     * Reading error
     *
     * @generated from protobuf enum value: ERR_READING = 38;
     */
    READING = 38,
    /**
     * Erasing error
     *
     * @generated from protobuf enum value: ERR_ERASING = 39;
     */
    ERASING = 39,
    /**
     * Writing error
     *
     * @generated from protobuf enum value: ERR_WRITING = 40;
     */
    WRITING = 40,
    /**
     * Invalid name error
     *
     * @generated from protobuf enum value: ERR_INVALID_NAME = 41;
     */
    INVALID_NAME = 41,
    /**
     * Decoder is missing
     *
     * @generated from protobuf enum value: ERR_DECODER_MISSING = 42;
     */
    DECODER_MISSING = 42,
    /**
     * Serializer is missing
     *
     * @generated from protobuf enum value: ERR_SERIALIZER_MISSING = 43;
     */
    SERIALIZER_MISSING = 43,
    /**
     * Data size is greater than raw bytes array
     *
     * @generated from protobuf enum value: ERR_SMALL_RAW = 44;
     */
    SMALL_RAW = 44,
    /**
     * Invalid request received
     *
     * @generated from protobuf enum value: ERR_INVALID_REQUEST = 45;
     */
    INVALID_REQUEST = 45,
    /**
     * Invalid TCP MBAP
     *
     * @generated from protobuf enum value: ERR_INVALID_TCP_MBAP = 47;
     */
    INVALID_TCP_MBAP = 47,
    /**
     * Invalid CRC
     *
     * @generated from protobuf enum value: ERR_CRC = 48;
     */
    CRC = 48,
    /**
     * Transport error
     *
     * @generated from protobuf enum value: ERR_TRANSPORT = 49;
     */
    TRANSPORT = 49,
    /**
     * Invalid response received
     *
     * @generated from protobuf enum value: ERR_INVALID_RESPONSE = 50;
     */
    INVALID_RESPONSE = 50,
    /**
     * Null iface event handler
     *
     * @generated from protobuf enum value: ERR_NULL_EVENT_HANDLER = 51;
     */
    NULL_EVENT_HANDLER = 51,
    /**
     * Base error code for OTA errors
     *
     * @generated from protobuf enum value: ERR_OTA_BASE = 5376;
     */
    OTA_BASE = 5376,
    /**
     * OTA partition conflict
     *
     * @generated from protobuf enum value: ERR_OTA_PARTITION_CONFLICT = 5377;
     */
    OTA_PARTITION_CONFLICT = 5377,
    /**
     * OTA select info invalid
     *
     * @generated from protobuf enum value: ERR_OTA_SELECT_INFO_INVALID = 5378;
     */
    OTA_SELECT_INFO_INVALID = 5378,
    /**
     * OTA validate failed
     *
     * @generated from protobuf enum value: ERR_OTA_VALIDATE_FAILED = 5379;
     */
    OTA_VALIDATE_FAILED = 5379,
    /**
     * OTA small security version
     *
     * @generated from protobuf enum value: ERR_OTA_SMALL_SEC_VER = 5380;
     */
    OTA_SMALL_SEC_VER = 5380,
    /**
     * OTA rollback failed
     *
     * @generated from protobuf enum value: ERR_OTA_ROLLBACK_FAILED = 5381;
     */
    OTA_ROLLBACK_FAILED = 5381,
    /**
     * OTA rollback invalid state
     *
     * @generated from protobuf enum value: ERR_OTA_ROLLBACK_INVALID_STATE = 5382;
     */
    OTA_ROLLBACK_INVALID_STATE = 5382,
    /**
     * Modbus exception 1
     *
     * @generated from protobuf enum value: ERR_MBUS_EXCEPTION_ILLEGAL_FUNCTION = 101;
     */
    MBUS_EXCEPTION_ILLEGAL_FUNCTION = 101,
    /**
     * Modbus exception 2
     *
     * @generated from protobuf enum value: ERR_MBUS_EXCEPTION_ILLEGAL_DATA_ADDR = 102;
     */
    MBUS_EXCEPTION_ILLEGAL_DATA_ADDR = 102,
    /**
     * Modbus exception 3
     *
     * @generated from protobuf enum value: ERR_MBUS_EXCEPTION_ILLEGAL_DATA_VAL = 103;
     */
    MBUS_EXCEPTION_ILLEGAL_DATA_VAL = 103,
    /**
     * Modbus exception 4
     *
     * @generated from protobuf enum value: ERR_MBUS_EXCEPTION_SERVER_DEVICE_FAILURE = 104;
     */
    MBUS_EXCEPTION_SERVER_DEVICE_FAILURE = 104
}
// @generated message type with reflection information, may provide speed optimized methods
class ErrData$Type extends MessageType<ErrData> {
    constructor() {
        super("Ciot.ErrData", [
            { no: 1, name: "err", kind: "enum", T: () => ["Ciot.Err", Err, "ERR_"] }
        ]);
    }
    create(value?: PartialMessage<ErrData>): ErrData {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.err = 0;
        if (value !== undefined)
            reflectionMergePartial<ErrData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ErrData): ErrData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Ciot.Err err */ 1:
                    message.err = reader.int32();
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
    internalBinaryWrite(message: ErrData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Ciot.Err err = 1; */
        if (message.err !== 0)
            writer.tag(1, WireType.Varint).int32(message.err);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.ErrData
 */
export const ErrData = new ErrData$Type();
