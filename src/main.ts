/*
 * @Author: xiao
 * @Date: 2023-05-16 22:59:39
 * @LastEditors: xiao
 * @LastEditTime: 2023-05-16 23:37:46
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('nest-blog-api')
    .setDescription('The nest-blog-api API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
