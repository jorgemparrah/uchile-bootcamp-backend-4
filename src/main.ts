import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './app.module';
import { CONFIG_LOGS } from './configLogs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: WinstonModule.createLogger(CONFIG_LOGS)
  });
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('APIs')
    .setVersion('1.0')
    .addTag('Usuarios')
    .addTag('Ubicacion')
    .addTag('Subcategorias')
    .addTag('Productos')
    .addTag('Servicios')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }));
  await app.listen(3000);
}
bootstrap();
