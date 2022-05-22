export namespace Balance {
  export interface viewProp {
    label: string;
    value: 0 | 1;
  }

  export interface Setting {
    typeA: 'A';
    typeB: 'B';
  }

  export interface Question {
    title: string;
    idx: number;
    labelA: string;
    labelB: string;
  }
}
