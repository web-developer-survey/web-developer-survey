<template>
  <v-app>
    <router-view />
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
<style></style>
