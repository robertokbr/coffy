import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateItemsDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  price: number;

  @IsString()
  @ApiProperty()
  orders: string;

  @IsString()
  @ApiProperty()
  imageURL: string;

  @IsString()
  @ApiProperty()
  description: string;
}
