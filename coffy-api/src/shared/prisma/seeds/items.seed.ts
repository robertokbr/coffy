import { PrismaClient } from 'prisma/prisma-client';
import { logger } from '../../logger';

export default class ItemsSeed {
  static async run(client: PrismaClient) {
    logger.info({ context: 'PRISMA', message: '🌱 Running Items seeds' });

    await client.items.upsert({
      where: { id: 0 },
      update: {},
      create: {
        name: 'Cake',
        description: 'One piece of cake',
        imageURL:
          'https://www.daninoce.com.br/wp-content/uploads/2018/11/9-receitas-deliciosas-de-naked-cake-dani-noce-destaque-960x625.jpg',
        price: 10 * 100,
      },
    });
  }
}
