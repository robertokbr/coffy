import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class FindItemsDto {
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  isAvailable: boolean;
}
