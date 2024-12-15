import { Test, TestingModule } from '@nestjs/testing';
import { DanatestService } from './danatest.service';

describe('DanatestService', () => {
  let service: DanatestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DanatestService],
    }).compile();

    service = module.get<DanatestService>(DanatestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
