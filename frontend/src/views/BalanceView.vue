<template>
  <balance-layout>
    <template v-if="balanceQuestionInfo.idx" #title> {{ balanceQuestionInfo.idx }}.{{ title }}</template>
    <template v-if="balanceQuestionInfo.idx" #content>
      <balance-content
        ref="content"
        :_id.sync="balanceQuestionInfo.idx"
        :height="customHeight"
        :label-a.sync="balanceQuestionInfo.labelA"
        :label-b.sync="balanceQuestionInfo.labelB"
        @click-answer="clickAnswer"
        @next-question="getQuestionInfo"
      />
    </template>
    <template v-else #content>
      <v-sheet>
        <v-card color="#385F73" dark tile>
          <v-card-title class="text-h5">
            <v-icon> mdi-emoticon-cry-outline</v-icon>
            No Result.
          </v-card-title>

          <v-card-subtitle>현재 등록된 밸런스게임이 없습니다.</v-card-subtitle>

          <v-card-actions>
            <v-btn color="#000" @click="test"> 등록 해보기</v-btn>
          </v-card-actions>
        </v-card>
      </v-sheet>
    </template>
    <template #banner>
      <banner height="50" width="300" />
      <banner height="100" width="300" />
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

  async test() {
    const { data } = await this.axios.get('/balance/answer');
  }

  async created() {
    console.log(this.balanceQuestionInfo);

    await this.getQuestionInfo();
    const test = this.$store.getters.balanceAnswers;
    console.log(test);
  }

  async getQuestionInfo(): Promise<void> {
    const sendData = {
      balanceAnswers: this.$store.getters.balanceAnswersIdx,
    };
    const { data } = (await this.axios.post(`/balance/question`, sendData)) as { data: Balance.Question };
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
    this.$store.commit('balanceVote', this.balanceQuestionInfo.idx);
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
