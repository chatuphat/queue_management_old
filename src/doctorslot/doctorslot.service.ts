import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDoctorslotDto } from 'src/dto/create-doctorslot.dto';
import { UpdateDoctorslotDto } from 'src/dto/update-doctorslot.dto';
import { IDoctorslot } from 'src/interface/doctorslot.interface';

import { Model } from 'mongoose';
import { Mode } from 'fs';

@Injectable()
export class DoctorslotService {
  constructor(
    @InjectModel('Doctorslot') private doctorslotModel: Model<IDoctorslot>,
  ) {}

  async createDoctorslot(
    createDoctorDto: CreateDoctorslotDto,
  ): Promise<IDoctorslot> {
    const newDoctorslot = await new this.doctorslotModel(createDoctorDto);
    return newDoctorslot.save();
  }

  async updateDoctoslot(
    doctorslotID: string,
    updateDoctorslotDto: UpdateDoctorslotDto,
  ): Promise<IDoctorslot> {
    const existingDoctorslot = await this.doctorslotModel.findByIdAndUpdate(
      doctorslotID,
      updateDoctorslotDto,
      { new: true },
    );
    if (!existingDoctorslot) {
      throw new NotFoundException(`Doctorslot #${doctorslotID} not found`);
    }
    return existingDoctorslot;
  }

  async getAllDoctorslots(doctorslotQuery): Promise<IDoctorslot[]> {
    const doctorsotDate = await this.doctorslotModel.find(doctorslotQuery);
    if (!doctorsotDate || doctorsotDate.length == 0) {
      throw new NotFoundException('Doctorslot data not found!');
    }
    return doctorsotDate;
  }

  async getDoctorslot(doctorslotID: string): Promise<IDoctorslot> {
    const existingDoctorslot = await this.doctorslotModel
      .findById(doctorslotID)
      .exec();
    if (!existingDoctorslot) {
      throw new NotFoundException(`Doctorslot #${doctorslotID} not found`);
    }
    return existingDoctorslot;
  }

  async delectDoctorslot(doctorslotID: string): Promise<IDoctorslot> {
    const delectDoctorslot = await this.doctorslotModel.findByIdAndDelete(
      doctorslotID,
    );
    if (!delectDoctorslot) {
      throw new NotFoundException(`Doctorslot #${doctorslotID} not found`);
    }
    return delectDoctorslot;
  }
}
