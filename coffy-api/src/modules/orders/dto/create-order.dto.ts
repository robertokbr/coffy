import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsObject } from 'class-validator';
import { StateCode } from '../enums/order-state.enum';
import { UserDto } from './user.dto';

export class CreateOrderDto {
  @IsEnum(StateCode)
  @ApiProperty()
  stateCode: StateCode;

  @IsObject()
  @ApiProperty()
  customer: UserDto;

  @IsArray()
  @ApiProperty({ example: [{ id: 1, amount: 5 }] })
  items: Array<{
    id: number;
    amount: number;
  }>;
}
