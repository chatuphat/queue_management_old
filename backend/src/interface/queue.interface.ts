import { Document } from "mongoose";

export interface IQueue extends Document {
  
  readonly appointmentsID: string;

  readonly  userHN: string;

  readonly queueNumber: string;

  readonly queueStatus: string;

  readonly AppointmentType: string;

  readonly slotDate: Date;

  readonly slotStartDateTime: Date;

  readonly slotEndDateTime: Date;

  readonly department: string;

  readonly room: string;

  readonly checkin: Date;

  readonly checkout: Date;

  readonly doctorID: string;

  readonly description: string;
}