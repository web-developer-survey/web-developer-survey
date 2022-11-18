<template>
  <v-sheet>
    <v-container>
      <v-card color="blue">
        <v-card-title> 정량조사 문항 수정 </v-card-title>
      </v-card>
      <v-row v-for="(item, idx) in questionInfo" :key="idx" :id="item.name">
        <v-divider />
        <v-col cols="12">
          <v-card class="pa-3" outlined tile>
            <v-simple-table fixed-header class="v-alert--border">
              <template #default>
                <thead>
                  <tr>
                    <th colspan="8">
                      <p class="text-h5 ma-0">{{ item.name }}</p>
                    </th>
                    <th colspan="2">
                      <v-btn class="float-right" @click="questionUpdate(item.name)">{{ setBtnText(item.name) }}</v-btn>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3">제목</td>
                    <td colspan="9">
                      <v-text-field v-model="item.title" />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">Type</td>
                    <td colspan="9">
                      <v-select :items="questionType" v-model="item.type"> </v-select>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">설명</td>
                    <td colspan="9">
                      <v-text-field v-model="item.desc" />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" rowspan="3">문항</td>
                    <td colspan="9"></td>
                  </tr>
                  <tr>
                    <td colspan="9">
                      <v-row class="text-center">
                        <v-col cols="2"> - </v-col>
                        <v-col cols="1"> value </v-col>
                        <v-col cols="6"> label </v-col>
                        <v-col cols="1"> Text </v-col>
                        <v-col cols="2"> AllowOne </v-col>
                      </v-row>
                      <v-row
                        v-for="(view, viewIdx) in item.viewInfo"
                        :key="`${idx}-view-${view.value}`"
                        class="ma-1 text-center"
                      >
                        <v-col cols="2">
                          <v-btn small dark color="red" fab @click="viewInfoDelete(idx, viewIdx)">
                            <v-icon dark> mdi-minus </v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="1">{{ view.value }}</v-col>
                        <v-col cols="6">
                          <v-text-field v-model="view.label" />
                        </v-col>
                        <v-col cols="1">
                          <v-checkbox v-model="view.addText" />
                        </v-col>
                        <v-col cols="2">
                          <v-checkbox v-model="view.isAllDisable" />
                        </v-col>
                        <v-col cols="12">
                          <v-divider />
                        </v-col>
                      </v-row>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="9" class="text-center">
                      <v-btn small dark color="green" width="500" height="50" @click="viewInfoCreate(idx)">
                        <span class="font-weight-bold">문항 추가</span>
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="12">
                      <pre class="grey text--white">{{ item }}</pre>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
      <v-divider />
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { sampleQuestion2, viewInfo } from '@/util/default-setting/sample/sample-question';
import { Survey } from '@/interface/survey-question';

@Component({ components: {} })
export default class QuestionManageView extends Vue {
  questionInfo: Survey.Question[] = [];
  createQuestionNames: string[] = [];
  questionType = ['RADIO', 'CHECKBOX', 'COMPLETE'];

  async mounted() {
    await this.getCreateSurvey();
    this.questionInfo = sampleQuestion2.map((value) => {
      const findInfo = viewInfo
        .filter((v) => v.questionSEQ === value.seq)
        .map((findItem) => {
          const { questionSEQ, ...other } = findItem;
          return {
            ...other,
            isAllDisable: false,
            addText: false,
          };
        });

      return {
        ...value,
        viewInfo: findInfo,
      };
    });
  }

  isCreatedQuestion(questionName: string): boolean {
    return !!this.createQuestionNames.find((item) => item === questionName);
  }

  setBtnText(questionName: string): string {
    const result = this.isCreatedQuestion(questionName);
    return result ? '수정' : '등록';
  }

  viewInfoCreate(idx: number) {
    this.questionInfo[idx].viewInfo.push({
      label: '',
      value: this.questionInfo[idx].viewInfo.length + 1,
      addText: false,
      isAllDisable: false,
    });
  }

  viewInfoDelete(idx: number, viewIdx: number) {
    this.questionInfo[idx].viewInfo.splice(viewIdx, 1);
    this.questionInfo[idx].viewInfo = this.questionInfo[idx].viewInfo.map((item, itemIdx) => {
      return {
        ...item,
        value: itemIdx + 1,
      };
    });
  }

  async questionUpdate(questionName: string) {
    const questionInfo = this.questionInfo.find((item) => item.name === questionName);
    await this.axios.patch(`/survey/question/${questionName}`, {
      ...questionInfo,
      surveyType: 'Quantitative',
    });
  }

  async getCreateSurvey() {
    const { data } = (await this.axios.get('/survey/question')) as { data: any[] };
    this.createQuestionNames = data.map((item) => item.name);
  }
}
</script>

<style scoped></style>
