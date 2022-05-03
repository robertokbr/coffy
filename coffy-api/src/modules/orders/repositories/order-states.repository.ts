import { OrderStates, PrismaClient } from '.prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderStatesRepository {
  private client = new PrismaClient().orderStates;

  public async find(query?: Partial<OrderStates>) {
    return this.client.findMany({
      where: { ...query },
    });
  }
}
