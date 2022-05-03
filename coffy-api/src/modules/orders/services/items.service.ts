import { Injectable } from '@nestjs/common';
import { FindItemsDto } from '../dto/find-items.dto';
import { UpdateItemDto } from '../dto/update-item.dto';
import { WebsocketGatewayProvider } from '../providers/websocket-gateway.provider';
import { ItemsRepository } from '../repositories/items.repository';

@Injectable()
export class ItemsService {
  constructor(
    private readonly itemsRepository: ItemsRepository,
    private readonly websocketGatewayProvider: WebsocketGatewayProvider,
  ) {}

  findAll(findItemsDto: FindItemsDto) {
    return this.itemsRepository.find(findItemsDto);
  }

  update(updateItemDto: UpdateItemDto, id: number) {
    this.websocketGatewayProvider.handleUpdatedItemMessage(
      JSON.stringify(updateItemDto),
    );

    return this.itemsRepository.save(updateItemDto, id);
  }
}
