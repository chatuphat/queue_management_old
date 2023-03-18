import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateDoctorprofileDto{
    @IsString()
    readonly firstNameTH: string;

    @IsString()
    readonly lastNameTH: string;

    @IsString()
    readonly firstNameEN: string;

    @IsString()
    readonly lastNameEN: string;
}