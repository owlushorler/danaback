import { Module } from '@nestjs/common';
import { DanatestController } from './danatest.controller';
import { DanatestService } from './danatest.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Dana, danatestSchema } from 'src/danaSchema/dana.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{
      name:Dana.name,
      schema:danatestSchema
      
    }])
  ],
  controllers: [DanatestController],
  providers: [DanatestService]
})
export class DanatestModule {}
