import { Either } from "fp-ts/lib/Either.js";
import { WifiScan } from "../../domain/usecase/wifi_scan.js";
import { ErrorBase } from "../../errors/error-base.js";
import { WifiApInfo, WifiReqScanResult } from "../../protos/ciot/proto/v2/wifi.js";
import { IfaceBase } from "../../domain/interfaces/iface-base.js";
import { IfaceInfo } from "../../protos/ciot/proto/v2/iface.js";
import { Msg } from "../../protos/ciot/proto/v2/msg.js";
import { MsgData } from "../../protos/ciot/proto/v2/msg_data.js";
import { ErrorInvalidType } from "../../errors/error-invalid-type.js";

export class WifiScanImpl implements WifiScan {
    _iface: IfaceBase;
    _wifiIfaceInfo: IfaceInfo;

    constructor(iface: IfaceBase, wifiIfaceInfo: IfaceInfo) {
        this._iface = iface;
        this._wifiIfaceInfo = wifiIfaceInfo;
    }

    async scan(): Promise<Either<ErrorBase, WifiApInfo[]>> {
        // Inicia o scan
        const scanResult = await this._startScan();
        
        if (scanResult._tag === 'Left') {
            return Promise.resolve(scanResult);
        }
        
        const count = scanResult.right.count;
        const apList: WifiApInfo[] = [];
        
        for (let i = 0; i < count; i++) {
            const apResult = await this._getAp(i);
            if (apResult._tag === 'Right') {
                apList.push(apResult.right);
            }
        }
        
        return Promise.resolve({ 
            _tag: 'Right' as const, 
            right: apList 
        });
    }

    async _getAp(id: number): Promise<Either<ErrorBase, WifiApInfo>> {
        let msg = Msg.create({
            iface: this._wifiIfaceInfo,
            data: MsgData.create({
                type: {
                    oneofKind: 'wifi',
                    wifi: {
                        type: {
                            oneofKind: 'request',
                            request: {
                                type: {
                                    oneofKind: 'getAp',
                                    getAp: { id }
                                }
                            }
                        }
                    }
                }
            })
        });
        
        let result = await this._iface.sendMsg(msg);
        if (result._tag === 'Left') {
            return Promise.resolve(result);
        }
        
        // Verifica se data existe e se é do tipo wifi
        if (!result.right.data || result.right.data.type.oneofKind !== 'wifi') {
            return Promise.resolve({ _tag: 'Left' as const, left: new ErrorInvalidType() });
        }
        
        const wifiData = result.right.data.type.wifi;

        if (wifiData.type.oneofKind === 'request' && wifiData.type.request.type.oneofKind === 'apInfo') {
            return Promise.resolve({ _tag: 'Right' as const, right: wifiData.type.request.type.apInfo });
        }
        
        return Promise.resolve({ _tag: 'Left' as const, left: new ErrorInvalidType() });
    }

    async _startScan(): Promise<Either<ErrorBase, WifiReqScanResult>> {
        let msg = Msg.create({
            iface: this._wifiIfaceInfo,
            data: MsgData.create({
                type: {
                    oneofKind: 'wifi',
                    wifi: {
                        type: {
                            oneofKind: 'request',
                            request: {
                                type: {
                                    oneofKind: 'scan',
                                    scan: {}
                                }
                            }
                        }
                    }
                }
            })
        });
        let result = await this._iface.sendMsg(msg);
        if (result._tag === 'Left') {
            return Promise.resolve(result);
        } 

        if (!result.right.data || result.right.data.type.oneofKind !== 'wifi') {
            return Promise.resolve({ _tag: 'Left' as const, left: new ErrorInvalidType() });
        }

        const wifiData = result.right.data.type.wifi;

        if (wifiData.type.oneofKind === 'request' && wifiData.type.request.type.oneofKind === 'scanResult') {
            return Promise.resolve({ _tag: 'Right' as const, right: wifiData.type.request.type.scanResult });
        }

        return Promise.resolve({ _tag: 'Left' as const, left: new ErrorInvalidType() });
    }
}
