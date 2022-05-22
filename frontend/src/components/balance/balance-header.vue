<template>
  <v-card min-height="100" outlined>
    <v-card-title class="text-h5 font-weight-bold text-wrap" v-html="addIconTitle" />
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
