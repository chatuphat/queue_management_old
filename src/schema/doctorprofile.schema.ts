import {Prop, Schema , SchemaFactory} from "@nestjs/mongoose"

@Schema ()
export class Doctorprofile {
    @Prop()
    firstNameTH : string;
    
    @Prop()
    lastNameTH : string;
    
    @Prop()
    firstNameEN : string;
    
    @Prop()
    lastNameEN : string;
}

export const DoctorprofileSchema = SchemaFactory.createForClass(Doctorprofile);