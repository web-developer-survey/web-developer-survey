<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet class="mx-auto" max-width="800px" min-height="80vh" rounded="lg">
        <v-row>
          <v-col cols="12">
            <v-subheader>
              <v-icon color="info" v-text="'mdi-format-list-checkbox'"></v-icon>
              웹 개발자 설문조사
            </v-subheader>
            <v-progress-linear :value="gage" class="px-15" color="primary" height="25">
              <strong>{{ gage }}%</strong>
            </v-progress-linear>
          </v-col>
          <v-col :key="step" cols="12">
            <v-divider />
            <v-container class="px-5" fluid>
              <v-card v-for="(item, idx) in stepQuestion" :key="item.title" class="mb-5" elevation="2" outlined>
                <v-card-title class="border-left-2196f3 font-weight-medium text-body-1 text-sm-subtitle-1">
                  <v-icon color="info">mdi-alpha-q-box</v-icon>
                  {{ item.title }}
                </v-card-title>
                <v-divider class="text-left" />

                <!-- 설명문 -->
                <v-alert v-if="item.desc" color="blue-grey" dark dense prominent>
                  <v-card-text v-html="item.desc"></v-card-text>
                </v-alert>
                <!-- 설명문 -->

                <v-card-text>
                  <!-- 설문지 -->

                  {{ testObj }}

                  <!-- 컴플릿 type -->
                  <template v-if="item.type === 'COMPLETE'">
                    <v-radio-group v-model="testObj[item.name]" row>
                      <v-radio
                        v-for="labelInfo in item.viewInfo"
                        :key="item.seq + '-' + labelInfo.value"
                        :value="labelInfo.value"
                        class="col-md-6 ma-0 pa-0 col-sm-12"
                      >
                        <template #label>
                          {{ labelInfo.label }}
                        </template>
                      </v-radio>
                    </v-radio-group>
                    <!-- #TODO: 추후 에러메시지 컴포넌트화 -->
                    <p v-if="false" class="error">에러메세지 입니다.</p>
                  </template>
                  <!-- 컴플릿 type -->

                  <!-- 라디오 type -->
                  <template v-if="item.type === 'RADIO'">
                    {{ item }}
                    <v-radio-group v-model="testObj[item.name]">
                      <v-radio
                        v-for="labelInfo in item.viewInfo"
                        :key="item.seq + '-' + labelInfo.value"
                        :value="labelInfo.value"
                        ripple
                      >
                        <template #label>
                          <v-row>
                            <v-col v-if="labelInfo.addText" cols="6">
                              <v-text-field class="ma-0" label="기타"></v-text-field>
                            </v-col>
                            <v-col v-else cols="12">
                              <label class="text-body-2 text-sm-body-1">{{ labelInfo.label }}</label>
                            </v-col>
                          </v-row>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </template>
                  <!-- 라디오 type -->
                </v-card-text>

                <v-divider />
              </v-card>
              <v-sheet height="100px" />
              <v-sheet class="text-center">
                <v-row align-content="center" justify="center">
                  <v-col cols="12">
                    <v-divider />
                  </v-col>
                  <v-col cols="6">
                    <v-btn block color="indigo darker-3" dark large @click="vote">Next(다음)</v-btn>
                  </v-col>
                </v-row>
              </v-sheet>
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
  private step: number = 1;
  private surveyQuestions: Survey.Question[] = sampleQuestion;
  // private testObj: { [key: Survey.QuestionName]: number[] };
  private testObj: { [key: string]: number[] | number } = {};

  get stepQuestion(): Survey.Question[] {
    return this.surveyQuestions.filter((question) => question.step === this.step);
  }

  get gage(): number {
    return (this.step - 1) * 10;
  }

  created() {
    const routerName = this.$route.name;
  }

  testObjShow() {
    // console.log(this.testObj);
    return 'aaa';
  }

  async mounted() {
    this.surveyQuestions = this.surveyQuestions.map((item1, idx) => {
      const findViewInfo = viewInfo.filter((v) => v.questionSEQ === item1.seq);
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

  validate() {}

  vote() {
    if (this.step >= 11) return;
    this.$vuetify.goTo(0, { duration: 300 });
    this.step++;
  }
}
</script>
