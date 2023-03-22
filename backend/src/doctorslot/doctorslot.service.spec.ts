import { Test, TestingModule } from '@nestjs/testing';
import { DoctorslotService } from './doctorslot.service';

describe('DoctorslotService', () => {
  let service: DoctorslotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorslotService],
    }).compile();

    service = module.get<DoctorslotService>(DoctorslotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
