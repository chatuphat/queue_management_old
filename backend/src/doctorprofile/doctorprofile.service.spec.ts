import { Test, TestingModule } from '@nestjs/testing';
import { DoctorprofileService } from './doctorprofile.service';

describe('DoctorprofileService', () => {
  let service: DoctorprofileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorprofileService],
    }).compile();

    service = module.get<DoctorprofileService>(DoctorprofileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
