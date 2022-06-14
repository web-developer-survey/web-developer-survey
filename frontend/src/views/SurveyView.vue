<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet class="mx-auto" min-height="98vh" rounded="lg" max-width="800px">
        <v-row>
          <v-col cols="12">

            <v-subheader><v-icon color="info" v-text="'mdi-format-list-checkbox'"></v-icon>웹 개발자 설문조사</v-subheader>
            <v-progress-linear
                class="px-15"
                value="10"
                color="primary"
                height="25"
            >
              <strong>10%</strong>
            </v-progress-linear>
            <!--            <v-btn @click="senDClick">테이터 생성</v-btn>-->
          </v-col>
          <v-col cols="12">
            <v-divider />
            <v-container fluid class="px-5">
              <v-card class="mb-5" elevation="0" outlined v-for="(item, idx) in surveyQuestions" :key="item.title">
                <v-card-title class="border-left-2196f3  font-weight-medium text-body-1 text-sm-subtitle-1">
                  <v-icon color="info" >mdi-alpha-q-box</v-icon> {{ item.title }}
                </v-card-title>
                <v-divider  class="text-left"/>
                <v-card-text>

                  <template v-if="item.type==='COMPLETE' ">

                      <v-radio-group row>
                        <v-radio
                            class=" col-md-6 ma-0 col-sm-12"
                            v-for="(labelInfo,labelIdx) in item.viewInfo" :key="item.seq + '-' + labelInfo.value"
                          :value="labelIdx"
                      ><template #label>
                          {{labelInfo.label}}
                        </template>
                        </v-radio>
                      </v-radio-group>

                  </template>


                  <template v-if="item.type==='RADIO' ">
                  <v-radio-group   >
                    <v-radio
                      v-for="labelInfo in item.viewInfo"
                      :key="item.seq + '-' + labelInfo.value"
                      :value="labelInfo.value"
                      ripple
                    >
                      <template #label>
                        <v-row>

                          <v-col cols="6" v-if="labelInfo.addText">
                            <v-text-field class="ma-0"  label="기타"></v-text-field>
                          </v-col>
                          <v-col cols="12"  v-else>
                            <label class="text-body-2 text-sm-body-1">{{labelInfo.label}}</label>
                          </v-col>
                        </v-row>
                      </template>

                    </v-radio>
                  </v-radio-group>
                  </template>
                </v-card-text>

                <v-divider />
              </v-card>
              <v-card>
                <v-btn>Prev(이전)</v-btn>
                <v-btn>Next(다음)</v-btn>
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
    this.surveyQuestions = this.surveyQuestions.map((item1, idx) => {
      const findViewInfo = viewInfo.filter((v) => v.questionSEQ === item1.seq);
    //
      const custom = findViewInfo.map((item) => {
        const { questionSEQ, isAllDisable, value, label, addText } = item;

        return {
          value,
          label,
          isAllDisable: !!isAllDisable,
          addText: !!addText,
        };
      });

      return {
        ...item1,
        viewInfo: custom,
      };
    });
  }

  async getLoadTest() {}

  reserve() {
    console.log('버튼 클릭');
  }
}
</script>
