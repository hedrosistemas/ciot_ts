import {
  HttpClient
} from '../../src';

import {
  HttpClientCfg,
  HttpClientMethod,
  HttpClientTransportType
} from '../../src/protos/ciot/proto/v2/http_client';

import {
  DataType,
  IfaceInfo,
  IfaceType
} from '../../src/protos/ciot/proto/v2/iface';

import { Msg } from '../../src/protos/ciot/proto/v2/msg';

const output = document.getElementById("output")!;
const button = document.getElementById("loadBtn")!;

const httpClient = new HttpClient(IfaceInfo.create({
  id: 0,
  type: IfaceType.HTTP_CLIENT
}));

const httpClientCfg = HttpClientCfg.create({
  url: "http://192.168.4.1:5050/v1/device",
  method: HttpClientMethod.HTTP_METHOD_POST,
  transport: HttpClientTransportType.HTTP_TRANSPORT_TCP,
  timeout: 5000,
});

(async () => {
  await httpClient.start(httpClientCfg);

  async function getData(ifaceId: number, ifaceType: IfaceType, dataType: DataType) {
    const response = await httpClient.sendMsg(Msg.create({
      iface: {
        id: ifaceId,
        type: ifaceType
      },
      data: {
        type: {
          oneofKind: 'getData',
          getData: { type: dataType }
        }
      }
    }));

    if (response._tag === 'Right') {
      return Msg.toJsonString(response.right, { prettySpaces: 2 });
    } else {
      return `Erro: ${JSON.stringify(response.left)}`;
    }
  }

  button.addEventListener("click", async () => {
    output.innerText = "Carregando...\n";

    const lines = [];

    lines.push("🧠 CIoT Interface Info:\n" + await getData(0, IfaceType.CIOT, DataType.INFO));
    lines.push("\n🔄 CIoT Interface Status:\n" + await getData(0, IfaceType.CIOT, DataType.STATUS));
    lines.push("\n🛠 System Interface Info:\n" + await getData(1, IfaceType.SYS, DataType.INFO));
    lines.push("\n📈 System Interface Status:\n" + await getData(1, IfaceType.SYS, DataType.STATUS));

    output.innerText = lines.join("\n\n-------------------------\n\n");
  });
})();
