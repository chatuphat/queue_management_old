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
} from '@nestjs/common';
import { CreateAppointmentDto } from 'src/dto/create-appointment.dto';
import { UpdateAppointmentDto } from 'src/dto/update-appointment.dto';
import { AppointmentService } from './appointment.service';
import { response } from 'express';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

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
    
  @Get()
  async getAppointments(@Res() response) {
    try {
      const appointmentData = await this.appointmentService.getAllAppointment();
      return response.status(HttpStatus.OK).json({
        message: 'All Appointment data found successfully',
        appointmentData,
      });
    }catch(err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id') 
  async getAppointment(@Res() response,@Param('id') appointmentID:string){
    try {
      const existingAppointment = await this.appointmentService.getAppointment(appointmentID);
      return response.status(HttpStatus.OK).json({
        message: 'Appointment found successfully',
                existingAppointment,
      });
    }catch (err) {
      return response.status(err.status).json(err.response)
    }
  }

}
