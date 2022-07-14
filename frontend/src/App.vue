<template>
  <v-app>
    <router-view id="#app" />
    <v-snackbar  :timeout="2000"
                 v-model="isErrorShow"
                 color="red"
                 top right>
      <v-card-title>      <v-icon>mdi-alert-circle-outline</v-icon> {{message}}</v-card-title>
<!--      ><template v-slot:action="{ attrs }">-->
<!--      <v-btn-->
<!--          color="blue"-->
<!--          text-->
<!--          v-bind="attrs"-->
<!--          @click="isErrorShow = false"-->
<!--      >-->
<!--        Close     {{isErrorShow}}-->

<!--      </v-btn>-->
<!--    </template>-->
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SurveyView from '@/views/SurveyView.vue';
import EventBus from "@/util/EventBus";

@Component({
  components: {
    SurveyView,
  },
})
export default class App extends Vue {

  private isErrorShow: boolean = false;
  private message: string = ''
  created() {
    this.eventAdd();
  }
  eventAdd(){
    EventBus.$on('Error',this.errorShow)
  }

  errorShow(message: string){
    console.log('test')
    this.message = message
    this.isErrorShow = true;
  }
}
</script>
<style>
.border-left-2196f3 {
  border-left: 5px solid #1976d2 !important;
}
</style>
