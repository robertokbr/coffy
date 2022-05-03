import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class OrderItemsDto {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNumber()
  @ApiProperty()
  itemId: number;

  @IsNumber()
  @ApiProperty()
  amount: number;

  @IsBoolean()
  @ApiProperty()
  isValid: boolean;
}
