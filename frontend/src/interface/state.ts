import { Survey } from '@/interface/survey-question';

export interface State {
  balanceAnswersIdx: number[];
  questions: Survey.Question[];

  //#TODO: 추후 인터페이스 생성
  answerData: any;
}
