import 'dotenv/config';
import grpc from 'grpc';
import path from 'path';
import paths from './configs/paths.cjs';
import * as protoLoader from '@grpc/proto-loader';
import { authHandler } from './handlers/index.js';

const packageDefinition = protoLoader.loadSync(
  path.resolve(paths.proto, 'auth.proto')
);

const AuthDefinition = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(
  AuthDefinition.Auth.AuthService.service,
  authHandler,
);

server.bindAsync(
  'localhost:50051',
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.info('gRPC server is listening on port 50051!');
    server.start();
  }
);

