import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
