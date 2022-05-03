import { Server, Socket } from 'socket.io';
import {
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { logger } from '../../../shared/logger';

@WebSocketGateway({ cors: { origin: '*' } })
export class WebsocketGatewayProvider {
  @WebSocketServer()
  server: Server;

  handleOrderCreatedMessage(payload: string): void {
    this.server.emit('order-created', payload);
  }

  handleUpdatedItemMessage(payload: string): void {
    this.server.emit('item-updated', payload);
  }

  handleUpdateOrderMessage(payload: string): void {
    this.server.emit('order-updated', payload);
  }

  afterInit() {
    logger.info({ context: 'Websocket', message: 'Initialized' });
  }

  handleDisconnect() {
    logger.info({ context: 'Websocket', message: 'Disconnected' });
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    logger.info({
      context: 'Websocket',
      message: 'Client Connected: ' + client.id,
    });
  }
}
