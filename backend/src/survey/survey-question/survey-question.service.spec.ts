import { Test, TestingModule } from '@nestjs/testing';
import { SurveyQuestionService } from './survey-question.service';

describe('SurveyQuestionService', () => {
  let service: SurveyQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveyQuestionService],
    }).compile();

    service = module.get<SurveyQuestionService>(SurveyQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
