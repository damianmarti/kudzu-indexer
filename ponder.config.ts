import { createConfig } from "@ponder/core";
import { http, parseAbiItem } from "viem";

import { BasedKudzuContainerForSaleAbi } from "./abis/BasedKudzuContainerForSaleAbi";
import { KudzuAbi } from "./abis/KudzuAbi";

export default createConfig({
  networks: {
    base: { chainId: 8453, transport: http(process.env.PONDER_RPC_URL_8453) },
  },
  contracts: {
    Kudzu: {
      abi: KudzuAbi,
      address: "0x94E84f2DBB9b068eA01DB531E7343ec2385B7052",
      network: "base",
      startBlock: 12516385,
    },
    BasedKudzuContainerForSale: {
      abi: BasedKudzuContainerForSaleAbi,
      factory: {
        address: "0x14Ac3ec55cE5865E1e9a83FC90f22465BB982434",
        event: parseAbiItem("event Created(address indexed owner, address indexed contractAddress)"),
        parameter: "contractAddress",
      },
      network: "base",
      startBlock: 13396321,
    },
  },
});
