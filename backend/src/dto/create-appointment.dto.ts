import {
  isDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  IsDateString,
} from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  readonly userHN: string;

  @IsString()
  readonly appointmentsType: string;

  @IsString()
  readonly department: string;

  @IsString()
  readonly room: string;

  @IsDateString()
  readonly slotDate: Date;

  @IsDateString()
  readonly slotStartDateTime: Date;

  @IsDateString()
  readonly slotEndDateTime: Date;

  @IsString()
  readonly descripton: string;
  @IsString()

  readonly appointmentStatus: string;
  @IsString()
  
  readonly doctorID: string;
}
