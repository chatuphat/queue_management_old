import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Doctorslot {
  @Prop()
  doctorlD: string;

  @Prop()
  slotDate: Date;

  @Prop()
  dayOfWeek: String;

  @Prop()
  slotStartDateTime: Date;

  @Prop()
  slotEndDateTime: Date;

  @Prop()
  isSlotIAvailable: boolean;

  @Prop()
  slotSatau: string;

  @Prop()
  departments: string;

  @Prop()
  room: string;

  @Prop()
  description: string;
}

export const DoctorslotSchema = SchemaFactory.createForClass(Doctorslot);
