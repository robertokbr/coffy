import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindItemsDto } from '../dto/find-items.dto';
import { ItemDto } from '../dto/item.dto';
import { UpdateItemDto } from '../dto/update-item.dto';
import { ItemsService } from '../services/items.service';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @ApiOperation({
    summary: 'Get all items or filter the result by the item availability',
  })
  @ApiResponse({
    type: [ItemDto],
  })
  @Get()
  async findAll(@Query() findItemsDto?: FindItemsDto): Promise<ItemDto[]> {
    return this.itemsService.findAll(findItemsDto);
  }

  @ApiResponse({
    type: ItemDto,
  })
  @Put(':id')
  async update(
    @Body() updateItemDto: UpdateItemDto,
    @Param() id: string,
  ): Promise<ItemDto> {
    return this.itemsService.update(updateItemDto, +id);
  }
}
