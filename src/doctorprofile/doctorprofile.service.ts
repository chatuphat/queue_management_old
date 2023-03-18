import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDoctorprofileDto } from 'src/dto/create-doctorprofile.dto';
import { UpdateDoctorprofileDto } from 'src/dto/update-doctorprofile.dto';
import { IDoctorprofile } from 'src/interface/doctorprofile.interface';
import { Model } from 'mongoose';

@Injectable()
export class DoctorprofileService {
  constructor(
    @InjectModel('Doctorprofile')
    private doctorprofileModel: Model<IDoctorprofile>,
  ) {}

  async createDoctorProfile(
    createDoctorprofileDto: CreateDoctorprofileDto,
  ): Promise<IDoctorprofile> {
    const newStudent = await new this.doctorprofileModel(
      createDoctorprofileDto,
    );
    return newStudent.save();
  }
}
