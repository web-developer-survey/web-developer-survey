<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet class="mx-auto" min-height="98vh" rounded="lg" max-width="800px">
        <v-row>
          <v-col cols="12">
            <v-subheader>📝웹 개발자 설문조사</v-subheader>
<!--            <v-btn @click="senDClick">테이터 생성</v-btn>-->
          </v-col>
          <v-col cols="12">
            <v-divider />
            <v-container fluid class="px-5">
              <v-card class="mb-3" elevation="0" outlined v-for="(item, idx) in step4" :key="item.title">
                <v-card-title class="text-body-1 text-sm-h6">{{ item.name }}.{{ item.title }}</v-card-title>
                <v-card-text>
                  <v-radio-group row>
                    <v-radio
                      v-for="labelInfo in item.viewInfo"
                      :key="item.title + '-' + labelInfo.value"
                      :label="labelInfo.label"
                      :value="labelInfo.value"
                    ></v-radio>
                  </v-radio-group>
                </v-card-text>

                <v-divider />
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
import { Survey } from '@/interface/survey-question';
import { sampleQuestion, viewInfo } from '@/util/default-setting/sample/sample-question';

@Component({
  components: {},
})
export default class SurveyView extends Vue {
  private message: string = '';
  private loading: boolean = false;
  private row: number = 0;

  private viewInfo = viewInfo;
  private surveyQuestions: Survey.Question[] = sampleQuestion;

  get step4(): Survey.Question[] {
    return this.surveyQuestions.filter((question) => question.step === 1);
  }

  created() {
    const routerName = this.$route.name;
  }


  // async senDClick() {
  //   const { data } = await this.axios.post('/survey/question', this.surveyQuestions);
  // }

  async mounted() {
    // await this.getLoadTest();
    // this.surveyQuestions = this.surveyQuestions.map((item1, idx) => {
    //   const findViewInfo = viewInfo.filter((v) => v.questionSEQ === item1.seq);
    //
    //   const custom = findViewInfo.map((item) => {
    //     const { questionSEQ, isAllDisable, value, label, addText } = item;
    //
    //     return {
    //       value,
    //       label,
    //       isAllDisable: !!isAllDisable,
    //       addText: !!addText,
    //     };
    //   });
    //
    //   return {
    //     ...item1,
    //     viewInfo: custom,
    //   };
    // });
  }

  async getLoadTest() {}

  reserve() {
    console.log('버튼 클릭');
  }
}
</script>
