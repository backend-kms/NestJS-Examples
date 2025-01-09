import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const options = new DocumentBuilder()
    .setTitle('NestJS')
    .setDescription('NestJS Example Description')
    .setVersion('1.0')
    .addServer('http://localhost:3000', 'Local')
    // .addServer('https://dev.yourapi.com/', 'Dev')
    // .addServer('https://yourapi.com/', 'Prod')
    // .addTag('API Tag')
    .build();


  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
