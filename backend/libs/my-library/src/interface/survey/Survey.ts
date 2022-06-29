export namespace Survey {
  export type questionType = 'RADIO' | 'CHECKBOX' | 'SATISFACTION' | 'TEXT' | 'TEXTAREA' | 'DESC' | 'COMPLETE';

  export class Answer {
    questionName: string;
    type: questionType;
    value: number[];
    etc: string;
    answerDate: Date;
  }
}
