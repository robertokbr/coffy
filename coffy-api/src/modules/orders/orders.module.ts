import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { OrdersService } from './services/orders.service';
import { OrdersController } from './controllers/orders.controller';
import EnsureAuthenticated from './middlewares/ensure-authenticated';
import { ItemsController } from './controllers/items.controller';
import { OrderStatesController } from './controllers/order-states.controller';
import { ItemsService } from './services/items.service';
import { OrdersRepository } from './repositories/orders.repository';
import { ItemsRepository } from './repositories/items.repository';
import { OrderStatesRepository } from './repositories/order-states.repository';
import { WebsocketGatewayProvider } from './providers/websocket-gateway.provider';
import { AuthServiceProvider } from '../common/providers/auth-service.provider';

@Module({
  imports: [AuthServiceProvider],
  controllers: [OrdersController, ItemsController, OrderStatesController],
  providers: [
    OrdersService,
    ItemsService,
    OrdersRepository,
    ItemsRepository,
    OrderStatesRepository,
    WebsocketGatewayProvider,
  ],
})
export class OrdersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EnsureAuthenticated)
      .forRoutes({ path: 'orders', method: RequestMethod.ALL });
  }
}
