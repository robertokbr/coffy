import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemsDto {
  @IsArray()
  @ApiProperty({
    example: [{ id: 1, amount: 5 }],
  })
  items: Array<{
    id: number;
    amount: number;
  }>;
}
