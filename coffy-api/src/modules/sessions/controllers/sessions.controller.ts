import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../common/providers/auth-service.provider';
import { CreateSessionsDto } from '../dto/create-session.dto';
import { SessionDto } from '../dto/session.dto';

@ApiTags('sessions')
@Controller('sessions')
export class SessionsController implements OnModuleInit {
  private authService: AuthService;

  constructor(
    @Inject('AuthServiceProvider')
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthService>('AuthService');
  }

  @Post()
  @ApiOperation({
    summary:
      'Create a session with a code and a name to generate the Auth JWT.',
  })
  create(@Body() createSessionDto: CreateSessionsDto): Promise<SessionDto> {
    const session = this.authService.createSession(createSessionDto);

    return firstValueFrom(session);
  }
}
