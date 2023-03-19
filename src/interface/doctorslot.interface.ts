
export interface IDoctorslot extends Document {
  readonly doctorlD: String;
  readonly slotDate: Date;
  readonly dayOfWeek: String;
  readonly slotStartDateTime: Date;
  readonly slotEndDateTime: Date;
  readonly isSlotIAvailable: boolean;
  readonly slotSatau: string;
  readonly departments: string;
  readonly room: string;
  readonly description: string;
}
