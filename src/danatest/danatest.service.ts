import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Dana } from 'src/danaSchema/dana.schema';
import { createDanaDto } from 'src/dto/danatest.dto';

@Injectable()
export class DanatestService {
    constructor (@InjectModel(Dana.name) private danaModel:Model<Dana>){}

    async findAll(): Promise<Dana[]> {  
        return this.danaModel.find().exec();  
      }  
    
      async findOne(id: string): Promise<Dana> {  
        return this.danaModel.findById(id).exec();  
      }  
    
      async create(user:createDanaDto ): Promise<Dana> {  
        const createdUser = new this.danaModel(user);  
        return createdUser.save();  
      }  
    
      async update(id: string, user:createDanaDto): Promise<Dana> {  
        return this.danaModel.findByIdAndUpdate(id, user, { new: true }).exec();  
      }  
    
      async patch(id: string, user: Partial<Dana>): Promise<Dana> {  
        return this.danaModel.findByIdAndUpdate(id, user, { new: true }).exec();  
      }  
    
      
      async remove(id: string): Promise<Dana> {  
        return this.danaModel.findByIdAndDelete(id).exec();  
      } 

}
