<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet class="mx-auto" min-height="98vh"  rounded="lg" max-width="800px">
        <v-row >
          <v-col cols="12" >
            <v-subheader >📝웹 개발자 설문조사</v-subheader>
          </v-col>
          <v-col cols="12">
            <v-divider/>
            <v-container fluid class="px-5">
              <v-card class="mb-3"  elevation="0" outlined v-for="(item,idx) in step4" :key="item.title">
                <v-card-title class="text-body-1 text-sm-h6 ">{{item.name}}.{{item.title}}</v-card-title>
                <v-card-text>
                  <v-radio-group
                      row
                  >
                    <v-radio
                        v-for="labelInfo in item.viewInfo" :key="item.title+'-'+labelInfo.value"
                        :label="labelInfo.label"
                        :value="0"
                    ></v-radio>
                  </v-radio-group>
                </v-card-text>

                <v-divider/>

              </v-card>
            </v-container>
          </v-col>
        </v-row>
      </v-sheet>

    </v-container>

  </v-main>

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
  private row: number = 0;

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

  get step4(): Survey.Question[]{
    return this.surveyQuestions.filter(question=>question.step === 4)
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
