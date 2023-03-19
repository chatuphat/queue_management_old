import { Injectable, NotFoundException } from '@nestjs/common';
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

  async createDoctorprofile(
    createDoctorprofileDto: CreateDoctorprofileDto,
  ): Promise<IDoctorprofile> {
    const newStudent = await new this.doctorprofileModel(
      createDoctorprofileDto,
    );
    return newStudent.save();
  }

  async updateDoctorprofile(
    doctorprofileID: string,
    updateDoctorprofileDto: UpdateDoctorprofileDto,
  ): Promise<IDoctorprofile> {
    const existingDoctorprofile =
      await this.doctorprofileModel.findByIdAndUpdate(
        doctorprofileID,
        updateDoctorprofileDto,
        { new: true },
      );
    if (!existingDoctorprofile) {
      throw new NotFoundException(
        `DoctorProfile #${doctorprofileID} not found`,
      );
    }
    return existingDoctorprofile;
  }

  async getAllDoctorprofile(): Promise<IDoctorprofile[]> {
    const doctorprofileData = await this.doctorprofileModel.find();

    if (!doctorprofileData || doctorprofileData.length == 0) {
      throw new NotFoundException('Doctorprofile data not found!');
    }
    return doctorprofileData;
  }
  async getDoctorprofile(doctorprofileID: string): Promise<IDoctorprofile> {
    const existingDoctorprofile = await this.doctorprofileModel
      .findById(doctorprofileID)
      .exec();
    if (!existingDoctorprofile) {
      throw new NotFoundException(
        `DoctorProfile #${doctorprofileID} not found`,
      );
    }
    return existingDoctorprofile;
  }
  async deleteDoctorprofile(doctorprofileID: string): Promise<IDoctorprofile> {
    const delectdDoctorprofile =
      await this.doctorprofileModel.findByIdAndDelete(doctorprofileID);
    if (!delectdDoctorprofile) {
      throw new NotFoundException(
        `DoctorProfile #${doctorprofileID} not found`,
      );
    }
    return delectdDoctorprofile;
  }
}
