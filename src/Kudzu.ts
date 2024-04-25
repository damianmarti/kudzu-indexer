import { ponder } from "@/generated";

ponder.on(
  "Kudzu:Transfer",
  async ({ event, context }) => {
    const { Kudzu } = context.db;
    // console.log(event.args);

    await Kudzu.upsert({
      id: event.args.tokenId,
      create: {
        contract: event.args.to,
        token: event.args.tokenId,
      },
      update: {
        contract: event.args.to,
      },
    });
  },
);
