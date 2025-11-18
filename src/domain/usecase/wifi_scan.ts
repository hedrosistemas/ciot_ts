import { Either } from "fp-ts/lib/Either";
import { ErrorBase } from "../../errors/error-base";
import { WifiApInfo } from "../../protos/ciot/proto/v2/wifi";

export abstract class WifiScan {
    abstract scan(): Promise<Either<ErrorBase, WifiApInfo[]>>;
}