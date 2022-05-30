import { Balance } from '@/common/interface/balance';

export function resetBalanceQuestion(): Balance.Question {
  return {
    title: '',
    idx: 0,
    labelA: '',
    labelB: '',
  };
}

export function resetBalanceResult() {
  return {
    aAvg: 0,
    bAvg: 0,
  };
}
