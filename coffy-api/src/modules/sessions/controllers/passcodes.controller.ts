import { Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../common/providers/auth-service.provider';
import { PasscodeDto } from '../dto/passcode.dto';
import { firstValueFrom } from 'rxjs';

@ApiTags('passcodes')
@Controller('passcodes')
export class PasscodesController implements OnModuleInit {
  private authService: AuthService;

  constructor(
    @Inject('AuthServiceProvider')
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthService>('AuthService');
  }

  @ApiOperation({
    summary: 'Generate a randomic passcode.',
  })
  @Post()
  async create(): Promise<PasscodeDto> {
    const passcode = this.authService.createPasscode({});

    return firstValueFrom(passcode);
  }
}
