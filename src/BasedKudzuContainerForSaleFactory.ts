import { ponder } from "@/generated";

ponder.on(
  "BasedKudzuContainerForSaleFactory:Created",
  async ({ event, context }) => {
    const { Container } = context.db;
    console.log(event.args);

    await Container.create({
      id: event.args.contractAddress,
      data: {
        owner: event.args.owner,
        contract: event.args.contractAddress,
      },
    });
  },
);
