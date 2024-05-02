# Kudzu Indexer

Ponder (https://ponder.sh/) based indexer for https://kudzu.exchange/

Index data about injected addresses and containers.

## Start the development server

`pnpm dev`

## Contracts config

At https://github.com/damianmarti/kudzu-indexer/blob/master/ponder.config.ts

- Kudzu contract: to process ***Transfer*** events to track infected addresses.
- BasedKudzuContainerForSale: to process ***OwnershipTransferred** events to set or change the owner of a container. It uses the ***BasedKudzuContainerForSaleAbiFactory*** address to track ***BasedKudzuContainerForSaleAbi*** contracts, using the ***Created*** event.

## Index Schema

At https://github.com/damianmarti/kudzu-indexer/blob/master/ponder.schema.ts

- Container: representing the container data, with owner and contract fields.
- Kudzu: injected addresses, with tokenId and contract address.

## Events hooks

- Kudzu:Transfer -> https://github.com/damianmarti/kudzu-indexer/blob/master/src/Kudzu.ts
- BasedKudzuContainerForSale:OwnershipTransferred -> https://github.com/damianmarti/kudzu-indexer/blob/master/src/BasedKudzuContainerForSale.ts
