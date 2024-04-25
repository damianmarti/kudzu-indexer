import { ponder } from "@/generated";

ponder.on(
  "BasedKudzuContainerForSale:OwnershipTransferred",
  async ({ event, context }) => {
    const { Container } = context.db;
    const contractAddress = event.log.address;
    const newOwner = event.args.newOwner;
    // console.log("contractAddress: ", contractAddress);
    // console.log("newOwner: ", newOwner);

    await Container.upsert({
      id: contractAddress,
      create: {
        owner: newOwner,
        contract: contractAddress,
      },
      update: {
        owner: newOwner,
      },
    });
  },
);
