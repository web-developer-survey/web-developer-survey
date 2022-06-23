<template>
  <v-app>
    <router-view id="#app" />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SurveyView from '@/views/SurveyView.vue';

@Component({
  components: {
    SurveyView,
  },
})
export default class App extends Vue {
  created() {}
}
</script>
<style>
.border-left-2196f3 {
  border-left: 5px solid #1976d2 !important;
}
</style>
