import { createConfig } from "@ponder/core";
import { http } from "viem";

import { BasedKudzuContainerForSaleFactoryAbi } from "./abis/BasedKudzuContainerForSaleFactoryAbi";

export default createConfig({
  networks: {
    base: { chainId: 8453, transport: http(process.env.PONDER_RPC_URL_8453) },
  },
  contracts: {
    BasedKudzuContainerForSaleFactory: {
      abi: BasedKudzuContainerForSaleFactoryAbi,
      address: "0x14Ac3ec55cE5865E1e9a83FC90f22465BB982434",
      network: "base",
      startBlock: 13396321,
    },
  },
});
