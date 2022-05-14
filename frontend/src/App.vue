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
import QuestionView from '@/views/QuestionView.vue';
import MainLayout from '@/components/survey/MainLayout.vue';

@Component({
  components: {
    QuestionView,
    MainLayout,
    Header,
  },
})
export default class App extends Vue {
  created() {}
}
</script>
<style></style>
