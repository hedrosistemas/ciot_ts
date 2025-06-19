import { HttpClient } from "../../src";
import { HttpClientCfg, HttpClientMethod, HttpClientTransportType } from "../../src/protos/ciot/proto/v2/http_client";
import { DataType, IfaceInfo, IfaceType } from "../../src/protos/ciot/proto/v2/iface";
import { Msg } from "../../src/protos/ciot/proto/v2/msg";

const httpClient = new HttpClient(IfaceInfo.create({
  id: 0,
  type: IfaceType.HTTP_CLIENT
}));

const httpClientCfg = HttpClientCfg.create({
  url: 'http://127.0.0.1:5050/v1/pd',
  method: HttpClientMethod.HTTP_METHOD_POST,
  transport: HttpClientTransportType.HTTP_TRANSPORT_TCP,
  timeout: 5000
});

httpClient.start(httpClientCfg);

async function getData(ifaceId: number, ifaceType: IfaceType, dataType: DataType) {
  var response = await httpClient.sendMsg(Msg.create({
    iface: {
      id: ifaceId,
      type: ifaceType
    },
    data: {
      type: {
        oneofKind: 'getData',
        getData: {
          type: dataType
        }
      }
    }
  }));

  if(response._tag == 'Right') {
    console.log(Msg.toJsonString(response.right, {prettySpaces: 2}))
  }
  else
  {
    console.log(response.left);
  }
}

async function getAll()
{
  console.log("CIoT interface Information:")
  await getData(0, IfaceType.CIOT, DataType.INFO);
  console.log("-------------------------")
  
  console.log("CIoT interface status:");
  await getData(0, IfaceType.CIOT, DataType.STATUS);
  console.log("-------------------------");
  
  console.log("System interface Information:");
  await getData(1, IfaceType.SYS, DataType.INFO);
  console.log("-------------------------");
  
  console.log("System interface Status:");
  await getData(1, IfaceType.SYS, DataType.STATUS);
  console.log("-------------------------");
}

getAll();