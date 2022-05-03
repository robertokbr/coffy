import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class SessionDto {
  @IsString()
  @ApiProperty()
  jwt: string;

  @IsDate()
  @ApiProperty()
  expiration: string;
}
