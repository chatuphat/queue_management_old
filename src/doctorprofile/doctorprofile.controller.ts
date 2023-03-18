import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateDoctorprofileDto } from 'src/dto/create-doctorprofile.dto';
import { UpdateDoctorprofileDto } from 'src/dto/update-doctorprofile.dto';
import { DoctorprofileService } from './doctorprofile.service';


@Controller('doctorprofile')
export class DoctorprofileController {

    constructor(private readonly doctorprofileService: DoctorprofileService){}

    @Post()
        async createDoctorprofile(@Res() response, @Body() createDoctorprofileDto: CreateDoctorprofileDto) {
            try {
                const newDoctorProfile = await this.doctorprofileService.createDoctorProfile(createDoctorprofileDto);
                return response.status(HttpStatus.CREATED).json({
                    message: 'DoctorProfile has been created successfully',
                    newDoctorProfile,
                });
            } catch (err) {
                console.log(err);
                return response.status(HttpStatus.BAD_REQUEST).json({
                    statusCode: 400,
                    message: 'Error: DoctorProfile not created!',
                    error: 'Bad Request',
                    errorMessage: err.message
                });
            }
        }

}
