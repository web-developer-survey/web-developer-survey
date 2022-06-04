import { Survey } from '@/interface/survey-question';

export interface State {
  balanceAnswersIdx: number[];
  questions: Survey.Question[];
}
