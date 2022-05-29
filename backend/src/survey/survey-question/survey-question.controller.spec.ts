import { Test, TestingModule } from '@nestjs/testing';
import { SurveyQuestionController } from './survey-question.controller';
import { SurveyQuestionService } from './survey-question.service';

describe('SurveyQuestionController', () => {
  let controller: SurveyQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyQuestionController],
      providers: [SurveyQuestionService],
    }).compile();

    controller = module.get<SurveyQuestionController>(SurveyQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
