<template>
  <v-col cols="12">
    <v-subheader>
      <v-icon color="info" v-text="'mdi-format-list-checkbox'"></v-icon>
      웹 개발자 설문조사
    </v-subheader>
    <v-progress-linear :value="gage" class="px-15" color="primary" height="25">
      <strong>{{ gage }}%</strong>
    </v-progress-linear>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({ components: {} })
export default class TopProgressBar extends Vue {
  @Prop({ default: 0 }) gage: number;
}
</script>

<style scoped></style>
