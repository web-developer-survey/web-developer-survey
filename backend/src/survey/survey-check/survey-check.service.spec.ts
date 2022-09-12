import { Test, TestingModule } from '@nestjs/testing';
import { SurveyCheckService } from './survey-check.service';

describe('SurveyCheckService', () => {
  let service: SurveyCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveyCheckService],
    }).compile();

    service = module.get<SurveyCheckService>(SurveyCheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
