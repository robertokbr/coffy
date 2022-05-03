import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { StateCode } from '../enums/order-state.enum';

export class UpdateOrderDto {
  @IsEnum(StateCode)
  @ApiProperty()
  stateCode: StateCode;
}
