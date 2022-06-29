export namespace Survey {
  export type questionType = 'RADIO' | 'CHECKBOX' | 'SATISFACTION' | 'TEXT' | 'TEXTAREA' | 'DESC' | 'COMPLETE';

  export class Answer {
    questionName: string;
    type: questionType;
    value: string;
    etc: string;
    answerDate: Date;
  }
}
