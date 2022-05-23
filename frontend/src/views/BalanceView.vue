<template>
  <balance-layout>
    <template #title>
      {{ title }}
    </template>
    <template #content>
      <balance-content
        :height="customHeight"
        :label-a.sync="balanceQuestionInfo.labelA"
        :label-b.sync="balanceQuestionInfo.labelB"
        @click-answer="clickAnswer"
        @next-question="getQuestionInfo"
      />
    </template>
    <template #banner>
      <div>
        <hr />
        <banner width="300" height="50" />
        <hr />
        <banner width="300" height="100" />
      </div>
    </template>
  </balance-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { balanceType } from '@/common/type/balance';
import { Balance } from '@/common/interface/balance';
import BalanceContent from '@/components/balance/balance-content.vue';
import BalanceHeader from '@/components/balance/balance-header.vue';
import Banner from '@/components/common/banner.vue';
import AppBar from '@/components/common/app-bar.vue';
import BalanceContentTop from '@/components/balance/detail/content/content-bar/balance-content-top.vue';
import BalanceLayout from '@/components/balance/balance-layout.vue';

@Component({
  components: { BalanceLayout, BalanceContentTop, AppBar, Banner, BalanceHeader, BalanceContent },
})
export default class BalanceView extends Vue {
  private selectedType: balanceType = null;
  private balanceQuestionInfo: Balance.Question = {
    title: '',
    idx: 0,
    labelA: '',
    labelB: '',
  };

  async created() {
    await this.getQuestionInfo();
  }

  async getQuestionInfo(): Promise<void> {
    const { data } = (await this.axios.get(`/balance`)) as { data: Balance.Question };
    this.balanceQuestionInfo = data;
  }

  clickAnswer(type: balanceType) {
    const isTypeA = type === 'A';
    this.selectedType = isTypeA ? 'A' : 'B';
  }

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
}
</script>
