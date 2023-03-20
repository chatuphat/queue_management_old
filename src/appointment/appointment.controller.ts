import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  Version,
} from '@nestjs/common';
import { CreateAppointmentDto } from 'src/dto/create-appointment.dto';
import { UpdateAppointmentDto } from 'src/dto/update-appointment.dto';
import { AppointmentService } from './appointment.service';
import { response } from 'express';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Version('1')
  @Post()
  async createAppointment(
    @Res() response,
    @Body() createAppointmentDto: CreateAppointmentDto,
  ) {
    try {
      const newAppointment = await this.appointmentService.createAppointment(
        createAppointmentDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Appointment has been created successfully',
        newAppointment,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Appointment not created!',
        error: 'Bad Request',
      });
    }
  }

  @Version('1')
  @Put('/:id')
  async updateAppointment(
    @Res() response,
    @Param('id') appointmentID: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    try {
      const existingAppointment =
        await this.appointmentService.updateAppointment(
          appointmentID,
          updateAppointmentDto,
        );
      return response.status(HttpStatus.OK).json({
        message: 'Appointment has been successfully updated',
        existingAppointment,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Version('1')
  @Get()
  async getAppointments(@Res() response) {
    try {
      const appointmentData = await this.appointmentService.getAllAppointment();
      return response.status(HttpStatus.OK).json({
        message: 'All Appointment data found successfully',
        appointmentData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Version('1')
  @Get('/:id')
  async getAppointment(@Res() response, @Param('id') appointmentID: string) {
    try {
      const existingAppointment = await this.appointmentService.getAppointment(
        appointmentID,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Appointment found successfully',
        existingAppointment,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Version('1')
  @Delete('/:id')
  async deleteAppointment(@Res() response, @Param('id') appointmentID: string) {
    try {
      const deletedAppointment =
        await this.appointmentService.deleteAppointment(appointmentID);
      return response.status(HttpStatus.OK).json({
        message: 'Student deleted successfully',
        deletedAppointment,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
