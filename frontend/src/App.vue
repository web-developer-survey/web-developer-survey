<template>
  <v-app>
    <!--    <Header />-->

    <router-view />
    <!--    </MainLayout>-->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/survey/Header.vue';
import Component from 'vue-class-component';
import SurveyView from '@/views/SurveyView.vue';
import MainLayout from '@/components/survey/MainLayout.vue';

@Component({
  components: {
    QuestionView: SurveyView,
    MainLayout,
    Header,
  },
})
export default class App extends Vue {
  created() {}
}
</script>
<style></style>
