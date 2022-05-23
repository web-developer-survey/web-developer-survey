<template>
  <v-card min-height="100" outlined>
    <v-card-text>
      <div>질문</div>
<!--      <v-card-title class=" text-wrap text-h4 text&#45;&#45;primary"  >Unlimited music  now </v-card-title>-->
    <v-card-title class=" text-wrap " v-html="addIconTitle" />

    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class BalanceHeader extends Vue {
  @Prop() title: string;

  get addIconTitle(): string {
    return `🔊 ${this.title}`;
  }
}
</script>

<style scoped></style>
