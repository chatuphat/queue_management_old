import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorprofileService } from './doctorprofile/doctorprofile.service';
import { DoctorprofileController } from './doctorprofile/doctorprofile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorprofileSchema } from './schema/doctorprofile.schema';
import { DoctorslotService } from './doctorslot/doctorslot.service';
import { DoctorslotController } from './doctorslot/doctorslot.controller';
import { DoctorslotSchema } from './schema/doctorslot.schema';
import { AppointmentSchema } from './schema/appointment.schema';
import { AppointmentService } from './appointment/appointment.service';
import { AppointmentController } from './appointment/appointment.controller';
import { QueueSchema } from './schema/queue.schema';
import { QueueService } from './queue/queue.service';
import { QueueController } from './queue/queue.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/doctordb'),
    MongooseModule.forFeature([
      { name: 'Doctorprofile', schema: DoctorprofileSchema },
      { name: 'Doctorslot', schema: DoctorslotSchema },
      { name: 'Appointment', schema: AppointmentSchema },
      { name: 'Queue', schema: QueueSchema },
    ]),
  ],
  controllers: [
    AppController,
    DoctorprofileController,
    DoctorslotController,
    AppointmentController,
    QueueController,
  ],
  providers: [
    AppService,
    DoctorprofileService,
    DoctorslotService,
    AppointmentService,
    QueueService,
  ],
})
export class AppModule {}
