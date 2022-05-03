import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { FindOrdersDto } from '../dto/find-orders.dto';
import { OrdersRepository } from '../repositories/orders.repository';
import { WebsocketGatewayProvider } from '../providers/websocket-gateway.provider';
import { OrderDto } from '../dto/order.dto';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
    private readonly websocketGatewayProvider: WebsocketGatewayProvider,
  ) {}

  async create(data: CreateOrderDto) {
    const order = await this.ordersRepository.create(data);

    this.websocketGatewayProvider.handleOrderCreatedMessage(
      JSON.stringify(order),
    );

    return OrderDto.fromEntity(order);
  }

  async findAll(user: UserDto, query: FindOrdersDto) {
    const orders = await this.ordersRepository.find(user, query);

    return orders.map((order) => OrderDto.fromEntity(order));
  }

  async update(updateOrderDto: UpdateOrderDto, id: number) {
    const order = await this.ordersRepository.save(updateOrderDto, id);

    this.websocketGatewayProvider.handleUpdateOrderMessage(
      JSON.stringify(order),
    );

    return OrderDto.fromEntity(order);
  }
}
