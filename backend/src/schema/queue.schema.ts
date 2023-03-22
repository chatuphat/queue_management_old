import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Queue {
  @Prop()
  appointmentsID: string;

  @Prop()
  userHN: string;

  @Prop()
  queueNumber: string;

  @Prop()
  queueStatus: string;

  @Prop()
  AppointmentType: string;

  @Prop()
  slotDate: Date;

  @Prop()
  slotStartDateTime: Date;

  @Prop()
  slotEndDateTime: Date;

  @Prop()
  department: string;

  @Prop()
  room: string;

  @Prop()
  checkin: Date;

  @Prop()
  checkout: Date;

  @Prop()
  doctorID: string;

  @Prop()
  description: string;
}

export const QueueSchema = SchemaFactory.createForClass(Queue);
