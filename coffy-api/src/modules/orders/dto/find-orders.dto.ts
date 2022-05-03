import { StateCode } from '../enums/order-state.enum';
import {
  IsNumber,
  IsEnum,
  IsDate,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindOrdersDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  id?: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ required: false })
  withUserFilter?: boolean;

  @IsOptional()
  @IsEnum(StateCode)
  @ApiProperty({ required: false })
  stateCode?: StateCode;

  @IsOptional()
  @IsDate()
  @ApiProperty({ required: false })
  createdAt?: Date;
}
