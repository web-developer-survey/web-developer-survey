import { balanceType } from '@/common/type/balance';

export namespace Balance {
  export interface viewProp {
    label: string;
    value: 0 | 1;
  }

  export interface Setting {
    typeA: balanceType;
    typeB: balanceType;
  }

  export interface Question {
    title: string;
    idx: number;
    labelA: string;
    labelB: string;
  }
}
