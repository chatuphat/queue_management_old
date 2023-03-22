import { Test, TestingModule } from '@nestjs/testing';
import { DoctorslotController } from './doctorslot.controller';

describe('DoctorslotController', () => {
  let controller: DoctorslotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorslotController],
    }).compile();

    controller = module.get<DoctorslotController>(DoctorslotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
