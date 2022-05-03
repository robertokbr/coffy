import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './shared/logger';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      // whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Coffy API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .setDescription(
      'Coffy API is the Backend for frontend of the Coffy app, project made with react native, and located at my Github. To use this API you must run the coffy-auth API, and use these endpoints to: generate a passcode > create a session > authorize > do whatever you want!!',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000, () => {
    logger.info({
      message: 'App started on port 3000 🚀',
      context: 'NestApplication',
    });
  });
}

bootstrap();
