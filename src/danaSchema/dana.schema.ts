import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

    @Schema()
    export class Dana {

        @Prop({required:true})
        jobTitle:string


        @Prop({required:true})
        company:string

        @Prop({required:true})
        loction:string
    }


    export const danatestSchema = SchemaFactory.createForClass(Dana)