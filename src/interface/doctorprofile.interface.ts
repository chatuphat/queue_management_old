import { Document } from 'mongoose';

export interface IDoctorprofile extends Document {
    readonly firstNameTH: string;
    readonly lastNameTH: string;
    readonly firstNameEN: string;
    readonly lastNameEN: string;


}