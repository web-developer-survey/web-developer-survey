<template>
  <v-card :loading="loading" class="mx-auto my-12" elevation="2" outlined>
    <template #progress>
      <v-progress-linear color="deep-purple" height="20" indeterminate></v-progress-linear>
    </template>

    <v-card-title>{{ questionTitle }}</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1 pa-2">
        <v-alert color="primary" outlined>
          <div class="text-h6">Description</div>
          <div v-html="questionInfo.description" />
        </v-alert>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-radio-group v-model="questionInfo.value" column>
        <v-radio label="1. 예" value="radio-1"></v-radio>
        <v-radio label="2. 아니오" value="radio-2"></v-radio>
      </v-radio-group>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <div class="text-center pa-2">
      <v-btn class="ma-1" color="secondary lighten-2" @click="reserve"> 이전(PREV)</v-btn>
      <v-btn class="ma-1" color="primary lighten-2" @click="reserve"> 다음(NEXT)</v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Survey} from "@/interface/survey-question";
import {sampleQuestion} from "@/util/default-setting/sample/sample-question";

@Component({
  components: {},
})
export default class SurveyView extends Vue {
  private message: string = '';
  private loading: boolean = false;
  private surveyQuestions: Survey.Question[] = sampleQuestion;


  private questionInfo = {
    qName: 'Q1',
    title: '안녕하세요 귀하께서는 웹 개발자 이신가요?',
    type: 'radio',
    description: `
      해당되는 부분에 답변해주시면 감사하겠습니다.</br>
      1. 예비 웹개발자 혹은 웹개발자로 근무하고 계시면 Y</br>
      2. 해당사항이 없다면 N`,
    value: null,
  };

  get questionTitle(): string {
    return `${this.questionInfo.qName}. ${this.questionInfo.title} `;
  }

  created() {
    const routerName = this.$route.name;
    console.log(routerName);
  }

  async mounted() {
    await this.getLoadTest();
  }

  async getLoadTest() {
    // const { data } = await this.axios.get(`/survey`);
    // this.message = data;
  }

  reserve() {
    console.log('버튼 클릭');
  }
}
</script>
