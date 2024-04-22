import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Container: p.createTable({
    id: p.string(),
    owner: p.string(),
    contract: p.string(),
  }),
}));
