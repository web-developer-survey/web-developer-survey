<template>
  <div>
    <v-system-bar window color="fff">
      <v-icon>mdi-message</v-icon>
      <span>{{ customText }}</span>
      <v-spacer></v-spacer>
      <v-icon>mdi-minus</v-icon>
      <v-icon>mdi-checkbox-blank-outline</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-system-bar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class BalanceContentTop extends Vue {
  @Prop() text: 'A' | 'B' | 'MAIN';

  get customText(): string {
    if (this.text === 'MAIN') return '질문';
    return '선택지 ' + this.text;
  }
}
</script>
<style></style>
