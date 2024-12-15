import { Test, TestingModule } from '@nestjs/testing';
import { DanatestController } from './danatest.controller';

describe('DanatestController', () => {
  let controller: DanatestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanatestController],
    }).compile();

    controller = module.get<DanatestController>(DanatestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
