export namespace Survey {
  export interface Question {
    surveyId: number;
    step: number;
    maxStep?: number;
    seq: number;
    title: string;
    type: string;
    name: string;
    viewInfo: ViewInfo[];
    desc: string;
    maxValue: number;
    minValue: number;
    showAndLogic: Logic[];
    showOrLogic: Logic[];
    isShow: true;
  }

  export interface Logic {
    LName: string;
    LValue: number[];
  }

  export interface ViewInfo {
    label: string;
    value: number;
    addText: boolean;
    isAllDisable: boolean;
  }

  export type QuestionName = `${FirstString}${DigitTen1to4}${'' | '0' | Digit}`;
}

type FirstString = 'Q';
type DigitTen1to4 = '1' | '2' | '3' | '4';
type Digit = DigitTen1to4 | '5' | '6' | '7' | '8' | '9';
