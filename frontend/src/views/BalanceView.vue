<template>
  <v-card class="fill-height">
    <v-banner single-line sticky color="white">
      <v-toolbar-title>밸런스 게임</v-toolbar-title>
      <template v-slot:actions>
        <v-btn text color="deep-purple accent-4" @click="$router.push('/')">Go Main</v-btn>
      </template>
    </v-banner>

    <v-card class="mx-auto" max-width="800" height="600">
      <!-- 질문  -->
      <balance-header :title="title" />
      <!-- 질문  -->

      <!-- 선택 창  -->
      <balance-content
        :selected-a.sync="selectedA"
        :selected-b.sync="selectedB"
        @click-answer="clickAnswer"
      />
      <!-- 선택 창  -->

      <!-- 질문 제출 -->
      <v-btn block color="primary" v-if="false">나도 질문 만들기!</v-btn>
      <!-- 질문 제출 -->

      <!-- 배너 -->
      <div v-if="false">
        <hr />
        <banner width="300" height="50" />
        <hr />
        <banner width="300" height="100" />
      </div>
      <!-- 배너 -->
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { balanceType } from '@/common/type/balance';
import { Balance } from '@/common/interface/balance';
import BalanceContent from '@/components/balance/balance-content.vue';
import BalanceHeader from '@/components/balance/balance-header.vue';
import Banner from '@/components/common/banner.vue';

@Component({
  components: { Banner, BalanceHeader, BalanceContent },
})
export default class BalanceView extends Vue {
  private selectedType: balanceType = null;
  private balanceQuestionInfo: Balance.Question = {
    title: '만약 개발자가 되기전 선택해야 한다면?',
    viewInfo: [{ label: 'a', value: 1 }],
  };

  async getQuestionInfo(): Promise<void> {
    const { data } = await this.axios.get(`/balance`);
  }

  clickAnswer(type: balanceType) {
    const isTypeA = type === 'A';
    this.selectedType = isTypeA ? 'A' : 'B';
  }

  get selectedA(): boolean | null {
    if (!this.selectedType) return null;

    return this.selectedType === 'A';
  }

  get selectedB(): boolean | null {
    if (!this.selectedType) return null;

    return this.selectedType === 'B';
  }

  get title(): string {
    return this.balanceQuestionInfo.title;
  }
}
</script>
