<template>
  <v-main class="grey lighten-3">
    <!--#TODO 추후 컴포넌트 분리 예정-->
    <v-container>
      <v-sheet class="mx-auto" max-width="800px" min-height="80vh" rounded="lg">
        <v-row>
          <top-progress-bar :gage="gage"></top-progress-bar>
          <v-col :key="step" cols="12">
            <v-divider />
            <v-container class="px-5" fluid>
              <v-card v-for="(item, idx) in stepQuestion" :key="item.title" class="mb-5" elevation="2" outlined>
                <!-- 제목 -->
                <survey-title :title="item.title" class="ma-0" />
                <!-- 제목 -->

                <!-- 설명문 -->
                <survey-description :desc="item.desc" class="ma-0" />

                <!-- 설명문 -->
                <v-row class="pa-3 ma-0">
                  <v-col cols="12">
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
                                  v-model="answerList[item.name + '_ETC']"
                                  class="ma-0 pa-0"
                                  hide-details
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
                          :label="labelInfo.label"
                          hide-details
                          ripple
                          @change="setCheckbox(item.name, labelInfo.value, $event)"
                        />
                        <!-- #todo: event 로 처리 -->
                        <v-row v-if="labelInfo.addText" :id="item.name + '_check_etc'" class="d-none">
                          <v-col cols="5">
                            <v-text-field
                              :id="item.name + '_check_etc_value'"
                              v-model="answerList[item.name + '_ETC']"
                              class="ml-5 ma-0 pa-0"
                              hide-details
                              label=""
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </template>
                    </template>
                    <!-- 체크박스 type -->

                    <!-- 라디오 type -->
                    <template v-if="item.type === 'SATISFACTION'">
                      <v-rating
                        v-model="answerList[item.name]"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        hover
                        size="48"
                      ></v-rating>
                      <v-card-title>{{ satisfactionMessage(answerList[item.name]) }}</v-card-title>
                    </template>
                    <!-- 라디오 type -->

                    <!-- 텍스트 type -->
                    <template v-if="item.type === 'TEXT'">
                      <v-text-field v-model="answerList[item.name]" size="12"></v-text-field>
                    </template>
                    <!-- 텍스트 type -->
                  </v-col>
                </v-row>

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
import { sampleQuestion2, viewInfo } from '@/util/default-setting/sample/sample-question';
import TopProgressBar from '@/components/survey/top-progress-bar.vue';
import SurveyTitle from '@/components/survey/card/survey-title.vue';
import SurveyDescription from '@/components/survey/card/survey-description.vue';

@Component({
  components: { SurveyDescription, SurveyTitle, TopProgressBar },
})
export default class SurveyView extends Vue {
  checkQuestionList: string[] = [];
  private surveyQuestions: Survey.Question[] = sampleQuestion2;
  private answerList: { [key: string]: number | number[] | string } = {};
  private step: number = 1;
  private errorInfo: {
    id: string;
    message: string;
  } = { id: '', message: '' };

  get stepQuestion(): Survey.Question[] {
    // return this.surveyQuestions.filter((question) => question.name === 'Q24');
    // return this.surveyQuestions.filter((question) => question.step === this.step);

    return this.surveyQuestions;
  }

  get gage(): number {
    return (this.step - 1) * 10;
  }

  test() {
    const a = (this.answerList['Q5'] as number[]).includes(98);
    console.log(a);
  }

  created() {
    const routerName = this.$route.name;
    const token = this.$store.getters.surveyToken;
    console.log({ token });
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
      if (value === 98) {
        const etcEle = document.getElementById(name + '_check_etc');
        if (etcEle) {
          etcEle.className = '';
        }
      }
    } else {
      (this.answerList[name] as number[]) = (this.answerList[name] as number[]).filter((item) => item !== value);
      if (value === 98) {
        const etcEle = document.getElementById(name + '_check_etc');
        const etcInput = document.getElementById(name + '_check_etc_value') as HTMLInputElement;
        if (etcEle && etcInput) {
          etcEle.className = 'd-none';
          etcInput.value = '';
        }
      }
    }

    // #TODO: 오브젝트 감지
    this.$set(this.answerList, name, this.answerList[name]);

    (this.answerList[name] as number[]).sort();
    console.log(this.answerList[name]);
  }

  get validate(): boolean {
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

  satisfactionMessage(value: number | number[] | string): string {
    const checkValue = value as number;
    if (!checkValue) return '평가 대기중 입니다.';
    if (checkValue === 1) return '매우 만족하지 못합니다.';
    if (checkValue === 2) return '만족하지 못합니다.';
    if (checkValue === 3) return '보통입니다.';
    if (checkValue === 4) return '만족합니다.';
    if (checkValue === 5) return '매우 만족합니다.';
    return '';
  }

  vote() {
    //#todo: 특정 문항은 number-> number[]로 변경해줘야함. QuestionType example-> Radio
    if (!this.validate) {
      this.errorMessageOpen();
      return;
    }

    if (this.step >= 11) return;
    this.$vuetify.goTo(0, { duration: 300 });
    this.step++;
  }

  errorMessageOpen() {
    this.$toast.open({
      message: this.errorInfo.message,
      type: 'error',
      position: 'top',
    });
  }
}
</script>
