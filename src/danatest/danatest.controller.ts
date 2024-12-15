import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { DanatestService } from './danatest.service';
import { Dana } from 'src/danaSchema/dana.schema';
import { createDanaDto } from 'src/dto/danatest.dto';

@Controller('danatest')
export class DanatestController {
    constructor (private danaService:DanatestService){}

    @Get()  
    async findAll(): Promise<Dana[]> {  
      return this.danaService.findAll();  
    }  
  
    @Get(':id') 
    @UsePipes(new ValidationPipe())  
    async findOne(@Param('id') id: string): Promise<Dana> {
        if(!id)throw new NotFoundException ("not valid") 
      return this.danaService.findOne(id);  

    }  
  
    @Post() 
    @UsePipes(new ValidationPipe())  
    async create(@Body() user: createDanaDto): Promise<Dana> {  
      return this.danaService.create(user);  
    }  
  
    @Put(':id')
    @UsePipes(new ValidationPipe())   
    async update(@Param('id') id: string, @Body() user: createDanaDto): Promise<Dana> { 
        if(!id)throw new NotFoundException ("not valid") 
      return this.danaService.update(id, user);  

    }  
  
    @Patch(':id')  
    async patch(@Param('id') id: string, @Body() user: Partial<createDanaDto>): Promise<Dana> {  
        if(!id)throw new NotFoundException ("not valid")
      return this.danaService.patch(id, user);  
    }  

  
    @Delete(':id')  
    async remove(@Param('id') id: string): Promise<Dana> { 
        if(!id)throw new NotFoundException ("not valid") 
      return this.danaService.remove(id);  
    }
}
