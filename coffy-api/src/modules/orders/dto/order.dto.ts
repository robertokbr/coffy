import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsEnum, IsNumber, IsObject } from 'class-validator';
import { StateCode } from '../enums/order-state.enum';
import { OrderItemsDto } from './order-items.dto';
import { UserDto } from './user.dto';

interface OrderEntity extends Omit<OrderDto, 'customer'> {
  customer: any;
}

export class OrderDto {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsObject()
  @ApiProperty()
  customer: UserDto;

  @IsEnum(StateCode)
  @ApiProperty()
  stateCode: StateCode;

  @IsArray()
  @ApiProperty()
  items?: OrderItemsDto[];

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  static fromEntity(data: OrderEntity) {
    const { customer, ...dto } = data;

    return Object.assign(new OrderDto(), {
      customer: customer.valueOf(),
      ...dto,
    });
  }
}
