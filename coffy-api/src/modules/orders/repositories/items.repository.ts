import { Items, PrismaClient } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateItemsDto } from '../dto/create-item.dto';

@Injectable()
export class ItemsRepository {
  private client = new PrismaClient().items;

  public async create(data: CreateItemsDto) {
    return this.client.create({
      data,
    });
  }

  public async find(query?: Partial<Items>) {
    return this.client.findMany({
      where: { ...query },
    });
  }

  public async findById(id: number) {
    return this.client.findFirst({
      where: { id },
    });
  }

  public async save(item: Partial<Items>, id: number) {
    return this.client.update({
      data: item,
      where: {
        id,
      },
    });
  }
}
