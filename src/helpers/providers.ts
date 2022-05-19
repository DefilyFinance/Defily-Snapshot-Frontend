import { JsonRpcProvider, WebSocketProvider } from '@ethersproject/providers';
import networks from '@/helpers/networks.json';

export class Providers {
  public rpc?: JsonRpcProvider;
  public ws?: WebSocketProvider;

  async setNetwork() {
    const chainId = "24";
    const rpcUrl: any = networks[chainId].rpcUrl;
    this.rpc = new JsonRpcProvider(rpcUrl);
    const wsUrl: any = networks[chainId].wsUrl;
    this.ws = wsUrl ? new WebSocketProvider(wsUrl) : undefined;
  }
}

export default new Providers();
