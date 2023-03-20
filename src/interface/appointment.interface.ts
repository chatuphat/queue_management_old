import { Document } from 'mongoose';

export interface IAppointment extends Document {
  readonly userHN: string;

  readonly appointmentsType: string;

  readonly department: string;

  readonly room: string;

  readonly slotDate: Date;

  readonly slotStartDateTime: Date;

  readonly slotEndDateTime: Date;

  readonly descripton: string;

  readonly appointmentStatus: string;

  readonly doctorID: string;
}
