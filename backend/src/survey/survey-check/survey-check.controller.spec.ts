import { Test, TestingModule } from '@nestjs/testing';
import { SurveyCheckController } from './survey-check.controller';
import { SurveyCheckService } from './survey-check.service';

describe('SurveyCheckController', () => {
  let controller: SurveyCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyCheckController],
      providers: [SurveyCheckService],
    }).compile();

    controller = module.get<SurveyCheckController>(SurveyCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
