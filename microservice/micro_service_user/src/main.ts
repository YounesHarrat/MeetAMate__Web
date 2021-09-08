import { NestFactory } from '@nestjs/core';
import { Transport } from "@nestjs/microservices";
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { Logger } from "@nestjs/common";

dotenv.config()
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: process.env.ADDR,
      port: process.env.PORT
    }
  });
  app.listen().then(()=>{
    logger.log(`Appilcation started on port : ${process.env.PORT}`)
  });
}
bootstrap();
