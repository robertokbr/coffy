import { PrismaClient } from '.prisma/client';
import ItemsSeed from './items.seed';
import OrderStateSeed from './order-state.seed';

const client = new PrismaClient();

const seeds = [OrderStateSeed, ItemsSeed];

seeds.forEach((seed) => {
  seed.run(client);
});
