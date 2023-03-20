import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Appointment {
  @Prop()
  userHN: string;

  @Prop()
  appointmentsType : string;

  @Prop()
  department : string

  @Prop()
  room : string

  @Prop()
  slotDate: Date

  @Prop()
  slotStartDateTime : Date

  @Prop()
  slotEndDateTime : Date

  @Prop()
  descripton : string

  @Prop()
  appointmentStatus: string

  @Prop()
  doctorID : string

}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
