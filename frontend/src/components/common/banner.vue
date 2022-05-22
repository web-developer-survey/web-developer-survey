<template>
  <v-card class="ma-auto pa-1" :width="width" :height="height" color="black"></v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class Banner extends Vue {
  @Prop() height: number;
  @Prop() width: number;
}
</script>

<style scoped></style>
