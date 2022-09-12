<template>
  <v-card class="fill-height">
    <v-banner single-line sticky color="white">
      <v-toolbar-title>결과 페이지</v-toolbar-title>
      <template v-slot:actions>
        <v-btn text color="deep-purple accent-4"> Go Review</v-btn>
      </template>
    </v-banner>

    <v-card class="mx-auto" max-width="800" height="600" v-for="_ in 3" :key="`test${_}`">
      <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share</v-btn>

        <v-btn color="orange" text> Explore</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ResultView extends Vue {
  constructor() {
    super();
  }
}
</script>
