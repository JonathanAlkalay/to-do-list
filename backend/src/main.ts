import { NestFactory } from '@nestjs/core';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


const prepareApp = async (): Promise<INestApplication> =>{

  const app = await NestFactory.create(AppModule);
  
  app.enableCors({ origin: '*' });
  app.useGlobalPipes( new ValidationPipe({ transform: true }) );

  return app;
}

async function bootstrap() {
  
  const logger: Logger = new Logger('NestApplication', { timestamp: true });

  const app = await prepareApp();
  await app.listen(8080, () => logger.log(`App listening on port 8080 !!!`));

}
bootstrap();
