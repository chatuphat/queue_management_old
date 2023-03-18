import { PartialType } from "@nestjs/mapped-types";
import {CreateDoctorprofileDto} from "./create-doctorprofile.dto";

export class UpdateDoctorprofileDto extends PartialType(CreateDoctorprofileDto)
{}