import { Module } from '@nestjs/common';
import { AuthServiceProvider } from '../common/providers/auth-service.provider';
import { PasscodesController } from './controllers/passcodes.controller';
import { SessionsController } from './controllers/sessions.controller';

@Module({
  controllers: [SessionsController, PasscodesController],
  imports: [AuthServiceProvider],
})
export class SessionsModule {}
