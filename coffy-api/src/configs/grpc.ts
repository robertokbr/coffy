import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import paths from './paths';

interface IgRPCConfigs {
  authService: ClientProviderOptions;
}

export const grpcConfigs = {
  authService: {
    name: 'AuthServiceProvider',
    transport: Transport.GRPC,
    options: {
      url: process.env.AUTH_SERVICE_PROVIDER_URL,
      package: 'Auth',
      protoPath: paths.proto,
    },
  },
} as IgRPCConfigs;
