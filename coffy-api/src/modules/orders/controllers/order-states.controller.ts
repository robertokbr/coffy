import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderStateDto } from '../dto/order-state.dto';
import { OrderStatesRepository } from '../repositories/order-states.repository';

@ApiTags('order-states')
@Controller('order-states')
export class OrderStatesController {
  constructor(private readonly orderStatesRepository: OrderStatesRepository) {}

  @ApiOperation({
    summary: 'Get all the states that one order can get.',
  })
  @Get()
  async findAll(): Promise<OrderStateDto[]> {
    return this.orderStatesRepository.find();
  }
}
