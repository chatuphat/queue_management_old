import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAppointmentDto } from 'src/dto/create-appointment.dto';
import { UpdateAppointmentDto } from 'src/dto/update-appointment.dto';
import { IAppointment } from '../interface/appointment.innterface';
import { Model } from 'mongoose';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel('Appointment') private appointmentModel: Model<IAppointment>,
  ) {}

  async createAppointment(
    createAppointmentDto: CreateAppointmentDto,
  ): Promise<IAppointment> {
    const newAppointment = await new this.appointmentModel(
      createAppointmentDto,
    );
    return newAppointment.save();
  }

  async updateAppointment(
    appointmentID: string,
    updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<IAppointment> {
    const existingAppointment = await this.appointmentModel.findByIdAndUpdate(
      appointmentID,
      updateAppointmentDto,
      { new: true },
    );
    if (!existingAppointment) {
      throw new NotFoundException(`Appointment #${appointmentID} not found`);
    }
    return existingAppointment;
  }

  async getAllAppointment(): Promise<IAppointment[]> {
    const appointmentData = await this.appointmentModel.find();
    if (!appointmentData || appointmentData.length == 0) {
      throw new NotFoundException('Appointment data nor found!');
    }
    return appointmentData;
  }

  async getAppointment(appointmentID: string): Promise<IAppointment> {
    const existingAppointment = await this.appointmentModel
      .findById(appointmentID)
      .exec();
    if (!existingAppointment) {
      throw new NotFoundException(`Appointment #${appointmentID} not found`);
    }
    return existingAppointment;
  }

  async deleteAppointment(appointmentID: string): Promise<IAppointment> {
    const deleteAppointment = await this.appointmentModel.findByIdAndDelete(
      appointmentID,
    );
    if (!deleteAppointment) {
      throw new NotFoundException(`Student #${appointmentID} not found`);
    }
    return deleteAppointment;
  }
}
