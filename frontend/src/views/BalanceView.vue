<template>
  <balance-layout>
    <template #title> {{ balanceQuestionInfo.idx }}.{{ title }} </template>
    <template #content>
      <balance-content
        ref="content"
        :height="customHeight"
        :label-a.sync="balanceQuestionInfo.labelA"
        :label-b.sync="balanceQuestionInfo.labelB"
        @click-answer="clickAnswer"
        @next-question="getQuestionInfo"
      />
    </template>
    <template #banner v-if="false">
      <div>
        <hr />
        <banner height="50" width="300" />
        <hr />
        <banner height="100" width="300" />
      </div>
    </template>
  </balance-layout>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';
import { balanceType } from '@/common/type/balance';
import { Balance } from '@/common/interface/balance';
import BalanceContent from '@/components/balance/balance-content.vue';
import Banner from '@/components/common/banner.vue';
import BalanceLayout from '@/components/balance/balance-layout.vue';
import { resetBalanceQuestion, resetBalanceResult } from '@/util/default-setting/balance';

@Component({
  components: { BalanceLayout, Banner, BalanceContent },
})
export default class BalanceView extends Vue {
  @Ref() content: BalanceContent;

  private balanceQuestionInfo: Balance.Question = resetBalanceQuestion();
  private balanceQuestionResult = resetBalanceResult();

  get title(): string {
    return this.balanceQuestionInfo.title;
  }

  get customHeight(): number {
    if (this.height >= 600) {
      return 300;
    } else {
      return 150;
    }
  }

  get height(): number {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return 220;
      case 'sm':
        return 400;
      case 'md':
        return 500;
      case 'lg':
        return 600;
      case 'xl':
        return 800;
    }
  }

  async created() {
    await this.getQuestionInfo();
  }

  async getQuestionInfo(): Promise<void> {
    const { data } = (await this.axios.get(`/balance/question`)) as { data: Balance.Question };
    this.balanceQuestionInfo = data;
  }

  getSendData(type: balanceType) {
    const value = type === 'A' ? 1 : 2;
    return {
      idx: this.balanceQuestionInfo.idx,
      value: value,
    };
  }

  async clickAnswer(type: balanceType) {
    const sendData = this.getSendData(type);
    await this.axios.post(`/balance/answer`, sendData);
    await this.getResult();
  }

  async getResult() {
    const { data } = await this.axios.get(`/balance/answer/${this.balanceQuestionInfo.idx}`);
    this.content.initValueA(data.aAvg);
    this.content.initValueB(data.bAvg);
    this.content.complete();
    this.balanceQuestionResult = data;
  }
}
</script>
