import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DanatestModule } from './danatest/danatest.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://owlushorler:Shola3819@owlushorler.2hspzcb.mongodb.net/?retryWrites=true&w=majority&appName=owlushorler"),
      DanatestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
