import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSessionsDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  code: string;
}
