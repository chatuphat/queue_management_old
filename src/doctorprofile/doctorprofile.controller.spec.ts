import { Test, TestingModule } from '@nestjs/testing';
import { DoctorprofileController } from './doctorprofile.controller';

describe('DoctorprofileController', () => {
  let controller: DoctorprofileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorprofileController],
    }).compile();

    controller = module.get<DoctorprofileController>(DoctorprofileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
