import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../../common/providers/auth-service.provider';
import { firstValueFrom } from 'rxjs';

@Injectable()
export default class EnsureAuthenticated implements NestMiddleware {
  constructor(
    @Inject('AuthServiceProvider')
    private readonly client: ClientGrpc,
  ) {}

  async use(request: Request, _response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new Error('JWT token is missing!');

    const [_, jwt] = authHeader.split(' ');
    const authService = this.client.getService<AuthService>('AuthService');
    const data = authService.getSessionPayload({ jwt });
    request.user = await firstValueFrom(data);

    next();
  }
}
