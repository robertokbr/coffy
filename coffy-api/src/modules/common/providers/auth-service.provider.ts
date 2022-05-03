import { ClientsModule } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { grpcConfigs } from 'src/configs/grpc';

export interface AuthService {
  createPasscode({}): Observable<{
    code: string;
    createdAt: string;
  }>;
  getSessionPayload(data: { jwt: string }): Observable<{
    id: string;
    name: string;
    code: string;
  }>;
  createSession(data: { code: string; name: string }): Observable<{
    jwt: string;
    expiration: string;
  }>;
}

export const AuthServiceProvider = ClientsModule.register([
  grpcConfigs.authService,
]);
