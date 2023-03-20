import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  IsDateString,
} from 'class-validator';

export class CreateQueueDto {
  @IsString()
  readonly appointmentsID: string;

  @IsString()
  readonly userHN: string;

  @IsString()
  readonly queueNumber: string;

  @IsString()
  readonly queueStatus: string;

  @IsString()
  readonly AppointmentType: string;

  @IsDateString()
  readonly slotDate: Date;

  @IsDateString()
  readonly slotStartDateTime: Date;

  @IsDateString()
  readonly slotEndDateTime: Date;

  @IsString()
  readonly department: string;

  @IsString()
  readonly room: string;

  @IsDateString()
  readonly checkin: Date;

  @IsDateString()
  readonly checkout: Date;

  @IsString()
  readonly doctorID: string;

  @IsString()
  readonly description: string;
}
