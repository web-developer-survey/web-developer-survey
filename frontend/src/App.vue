<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SurveyView from '@/vi ews/SurveyView.vue';

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
