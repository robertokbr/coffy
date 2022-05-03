import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './shared/prisma/prisma.service';
import { OrdersModule } from './modules/orders/orders.module';
import { SessionsModule } from './modules/sessions/sessions.module';

@Module({
  imports: [OrdersModule, SessionsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
