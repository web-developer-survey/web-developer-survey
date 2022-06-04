export namespace Survey {
  export interface Question {
    surveyId: number;
    step: number;
    seq: number;
    title: string;
    type: string;
    name: string;
    viewInfo: [];
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
    addText: true;
    isAllDisable: boolean;
  }
}
