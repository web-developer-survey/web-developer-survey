<template>
  <v-sheet>
    <v-card-title class="border-left-2196f3 font-weight-medium text-body-1 text-sm-subtitle-1">
      <v-icon color="info">mdi-alpha-q-box</v-icon>
      {{ title }}
    </v-card-title>
    <v-divider class="text-left" />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class SurveyTitle extends Vue {
  @Prop({ default: '' }) title: string;
}
</script>

<style scoped></style>
