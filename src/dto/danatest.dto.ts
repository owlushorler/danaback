import { IsNotEmpty, IsString } from "class-validator"

export class createDanaDto{
     @IsNotEmpty()  
     @IsString() 
    jobTitle:string


     @IsNotEmpty()  
     @IsString() 
    company:string

     @IsNotEmpty()  
     @IsString() 
    loction:string

}