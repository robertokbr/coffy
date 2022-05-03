import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class PasscodeDto {
  @IsString()
  @ApiProperty()
  code: string;

  @IsDate()
  @ApiProperty()
  createdAt: string;
}
