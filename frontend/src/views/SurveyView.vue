<template>
  <v-main class="grey lighten-3">
    <!--#TODO 추후 컴포넌트 분리 예정-->
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

                  <!-- 컴플릿 type -->
                  <template v-if="item.type === 'COMPLETE'">
                    <v-radio-group v-model="answerList[item.name]" row>
                      <v-radio
                        v-for="labelInfo in item.viewInfo"
                        :key="item.seq + '-' + labelInfo.value"
                        :value="labelInfo.value"
                        class="col-md-6 ma-0 pa-0 col-sm-12"
                        ripple
                      >
                        <template #label>
                          {{ labelInfo.label }}
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </template>
                  <!-- 컴플릿 type -->

                  <!-- 라디오 type -->
                  <template v-if="item.type === 'RADIO'">
                    <v-radio-group v-model="answerList[item.name]">
                      <v-radio
                        v-for="labelInfo in item.viewInfo"
                        :key="item.seq + '-' + labelInfo.value"
                        :value="labelInfo.value"
                        ripple
                      >
                        <template #label>
                          <v-row>
                            <v-col v-if="labelInfo.addText" cols="6">
                              <v-text-field
                                class="ma-0 pa-0"
                                hide-details
                                v-model="answerList[item.name + '_ETC']"
                              ></v-text-field>
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

                  <!-- 체크박스 type -->
                  <template v-if="item.type === 'CHECKBOX' && Array.isArray(answerList[item.name])">
                    <template v-for="labelInfo in item.viewInfo">
                      <v-checkbox
                        :key="item.seq + '-' + labelInfo.value"
                        :class="item.name"
                        ripple
                        hide-details
                        @change="setCheckbox(item.name, labelInfo.value, $event)"
                        :label="labelInfo.label"
                      />
                      <v-row v-if="labelInfo.addText && answerList[item.name].includes(98)">
                        <v-col cols="5">
                          <v-text-field
                            class="ml-5 ma-0 pa-0"
                            hide-details
                            v-model="answerList[item.name + '_ETC']"
                            label=""
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </template>
                  </template>
                  <!-- 체크박스 type -->
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
                    <v-btn block color="indigo darker-3" dark large @click="showValue">값 확인</v-btn>
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
  private surveyQuestions: Survey.Question[] = sampleQuestion;
  private answerList: { [key: string]: number | number[] | string } = {};
  private step: number = 1;
  checkQuestionList: string[] = [];
  private errorInfo: {
    id: string;
    message: string;
  } = { id: '', message: '' };

  get stepQuestion(): Survey.Question[] {
    return this.surveyQuestions.filter((question) => question.name === 'Q5');
    // return this.surveyQuestions.filter((question) => question.step === this.step);
    // return this.surveyQuestions;
  }

  test() {
    const a = (this.answerList['Q5'] as number[]).includes(98);
    console.log(a);
  }

  get gage(): number {
    return (this.step - 1) * 10;
  }

  created() {
    const routerName = this.$route.name;
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

    for (const item of this.surveyQuestions) {
      const { name, type } = item;
      if (type === 'CHECKBOX') {
        this.checkQuestionList.push(name);
        this.answerList[name] = [];
      }
    }
  }

  setCheckbox(name: string, value: number, $event: any) {
    const isAdd = !!$event;
    if (isAdd) {
      (this.answerList[name] as number[]).push(value);
    } else {
      (this.answerList[name] as number[]) = (this.answerList[name] as number[]).filter((item) => item !== value);
    }

    // #TODO: 오브젝트 감지
    this.$set(this.answerList, name, this.answerList[name]);

    (this.answerList[name] as number[]).sort();
    console.log(this.answerList[name]);
  }

  validate(): boolean {
    const questionNames = this.stepQuestion.map((value) => value.name);
    for (let questionName of questionNames) {
      if (this.checkQuestionList.includes(questionName)) {
        // #TODO: 체크박스 기타값 검증 함수 분리
        if ((this.answerList[questionName] as number[]).includes(98)) {
          if (!this.answerList[questionName + '_ETC']) {
            //#TODO: 메세지 관련 함수 만들기
            this.errorInfo.id = questionName;
            this.errorInfo.message = `${questionName} 기타 값을 입력해주세요.`;
            return false;
          }
        }

        // #TODO: 체크박스 검증 함수 분리
        if (!(this.answerList[questionName] as number[]).length) {
          this.errorInfo.id = questionName;
          this.errorInfo.message = `${questionName} 값을 입력해주세요.`;
          return false;
        }
      } else {
        // #TODO: 일반 값 검증 함수 분리
        if (!this.answerList[questionName]) {
          this.errorInfo.id = questionName;
          this.errorInfo.message = `${questionName} 값을 입력해주세요.`;
          return false;
        }
      }
    }
    return true;
  }

  showValue() {
    console.log(this.answerList);
  }

  vote() {
    //#todo: 특정 문항은 number-> number[]로 변경해줘야함. QuestionType example-> Radio
    if (!this.validate()) {
      this.$toast.open({
        message: this.errorInfo.message,
        type: 'error',
        position: 'top',
      });

      return;
    }

    if (this.step >= 11) return;
    this.$vuetify.goTo(0, { duration: 300 });
    this.step++;
  }
}
</script>
