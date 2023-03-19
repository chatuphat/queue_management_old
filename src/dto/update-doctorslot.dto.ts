import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorslotDto } from './create-doctorslot.dto';

export class UpdateDoctorslotDto extends PartialType(CreateDoctorslotDto) {}
