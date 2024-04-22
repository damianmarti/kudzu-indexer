import { ponder } from "@/generated";

ponder.on(
  "BasedKudzuContainerForSaleFactory:Created",
  async ({ event, context }) => {
    console.log(event.args);
  },
);
