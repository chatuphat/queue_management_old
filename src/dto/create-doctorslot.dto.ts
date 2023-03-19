import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  IsDate,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export class CreateDoctorslotDto {
  @IsString()
  readonly doctorlD: String;

  @IsDateString()
  readonly slotDate: Date;

  @IsString()
  readonly dayOfWeek: String;

  @IsDateString()
  readonly slotStartDateTime: Date;

  @IsDateString()
  readonly slotEndDateTime: Date;

  @IsBoolean()
  readonly isSlotIAvailable: boolean;

  @IsString()
  readonly slotSatau: string;

  @IsString()
  readonly departments: string;

  @IsString()
  readonly room: string;

  @IsString()
  readonly description: string;
}
