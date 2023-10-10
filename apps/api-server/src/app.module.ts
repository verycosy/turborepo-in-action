import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleService } from 'back';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SampleService],
})
export class AppModule {}
