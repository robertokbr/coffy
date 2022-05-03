import { PrismaClient } from 'prisma/prisma-client';
import { StateCode } from '../../../modules/orders/enums/order-state.enum';
import { logger } from '../../logger';

export default class OrderStateSeed {
  static async run(client: PrismaClient) {
    logger.info({ context: 'PRISMA', message: '🌱 Running OrderState seeds' });

    const data = [
      {
        code: StateCode.Waiting,
        description: 'Waiting for state change',
      },
      {
        code: StateCode.Preparing,
        description: 'Order in preparing',
      },
      {
        code: StateCode.Canceled,
        description: 'Order canceled',
      },
      {
        code: StateCode.Done,
        description: 'Order preparing is done',
      },
    ];

    await Promise.all(
      data.map((os) =>
        client.orderStates.upsert({
          where: { code: os.code },
          update: {},
          create: os,
        }),
      ),
    );
  }
}
