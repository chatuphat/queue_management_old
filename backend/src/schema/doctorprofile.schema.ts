import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Doctorprofile {
  @Prop()
  firstNameTH: string;

  @Prop()
  lastNameTH: string;

  @Prop()
  firstNameEN: string;

  @Prop()
  lastNameEN: string;

  @Prop()
  codeDoctor: string;
}

export const DoctorprofileSchema = SchemaFactory.createForClass(Doctorprofile);
