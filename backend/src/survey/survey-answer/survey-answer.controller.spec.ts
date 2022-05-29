import { Test, TestingModule } from '@nestjs/testing';
import { SurveyAnswerController } from './survey-answer.controller';
import { SurveyAnswerService } from './survey-answer.service';

describe('SurveyAnswerController', () => {
  let controller: SurveyAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyAnswerController],
      providers: [SurveyAnswerService],
    }).compile();

    controller = module.get<SurveyAnswerController>(SurveyAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
