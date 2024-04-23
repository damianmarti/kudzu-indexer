import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Container: p.createTable({
    id: p.string(),
    owner: p.string(),
    contract: p.string(),
  }),
  Kudzu: p.createTable({
    id: p.bigint(),
    token: p.bigint(),
    contract: p.string(),
  }),
}));
