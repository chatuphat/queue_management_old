import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorprofileService } from './doctorprofile/doctorprofile.service';
import { DoctorprofileController } from './doctorprofile/doctorprofile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorprofileSchema } from './schema/doctorprofile.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/doctordb'),
MongooseModule.forFeature([{name: 'Doctorprofile',schema:DoctorprofileSchema}])],
  controllers: [AppController, DoctorprofileController],
  providers: [AppService, DoctorprofileService],
})
export class AppModule {}
