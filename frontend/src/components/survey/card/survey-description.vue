<template>
  <v-alert v-if="desc" color="blue-grey" dark dense prominent>
    <v-card-text v-html="desc"></v-card-text>
  </v-alert>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class SurveyDescription extends Vue {
  @Prop({ default: '' }) desc: string;
}
</script>

<style scoped></style>
