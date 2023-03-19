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
import { CreateDoctorslotDto } from 'src/dto/create-doctorslot.dto';
import { UpdateDoctorslotDto } from 'src/dto/update-doctorslot.dto';
import { IDoctorslot } from 'src/interface/doctorslot.interface';
import { DoctorslotService } from './doctorslot.service';
import { response } from 'express';

@Controller('doctorslot')
export class DoctorslotController {
  constructor(private readonly doctorslotService: DoctorslotService) {}

  @Post()
  async createDoctorslot(
    @Res() response,
    @Body() createDoctorslotDto: CreateDoctorslotDto,
  ) {
    try {
      const newDoctorslot = await this.doctorslotService.createDoctorslot(
        createDoctorslotDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Doctorslot has been created successfully',
        newDoctorslot,
      });
    } catch (err) {
      console.log(err);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Doctorslot not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateDoctorslot(
    @Res() response,
    @Param('id') doctorslotID: string,
    @Body() updateDoctorDto: UpdateDoctorslotDto,
  ) {
    try {
      const existingDoctorslot = await this.doctorslotService.updateDoctoslot(
        doctorslotID,
        updateDoctorDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Doctorslot has been successfully updated',
        existingDoctorslot,
      });
    } catch (err) {
      return response.status(err.status).json(err.status);
    }
  }

  @Get()
  async getDoctorslots(@Res() response) {
    try {
      const doctorslotDate = await this.doctorslotService.getAllDoctorslots();
      return response.status(HttpStatus.OK).json({
        message: 'All Doctorslot data found successfully',
        doctorslotDate,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getDoctorslot(@Res() response, @Param('id') doctorslotID: string) {
    try {
      const existingDoctorslot = await this.doctorslotService.getDoctorslot(
        doctorslotID,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Doctorslot found successfully',
        existingDoctorslot,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteDoctorslot(@Res() response,@Param('id') doctorslotID:string){
    try {
      const deletedDoctorslot = await this.doctorslotService.delectDoctorslot(doctorslotID);
      return response.status(HttpStatus.OK).json({
        message: 'Doctorslot deleted successfully',
        deletedDoctorslot,
      });
      
    }catch (err){
      return response.status(err.status).json(err.response)
    }
  }
}
