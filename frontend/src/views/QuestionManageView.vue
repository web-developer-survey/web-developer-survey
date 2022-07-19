<template>
  <v-sheet >
    <v-container>
      <v-row v-for="(item, idx) in questionInfo" :key="idx">
        <v-divider/>
        <v-col cols="12">
          <v-card class="pa-3" outlined tile>
            <v-simple-table fixed-header class="v-alert--border">
              <template #default>
                <thead>
                <tr>
                  <th colspan="10"><p class="text-h5 ma-0">{{item.name}}</p></th>
                  <th colspan="2" ><v-btn class="float-right">수정</v-btn></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td colspan="3">제목</td>
                  <td colspan="9">
                    <v-text-field :value="item.title"/>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">설명</td>
                  <td colspan="9">
                    <v-text-field :value="item.desc"/>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" rowspan="2">문항</td>
                  <td colspan="9"></td>
                </tr>
                <tr>
                  <td colspan="9">
                    <v-row v-for="view in item.viewInfo" :key="`${idx}-view-${view.value}`" class="ma-1">
                      <v-col cols="2">
                        <v-btn small dark color="red"  fab >
                          <v-icon dark>
                            mdi-minus
                          </v-icon>
                        </v-btn>
                      </v-col>
                      <v-col cols="2">{{view.value}}</v-col>
                      <v-col cols="8">{{view.label}}</v-col>
                      <v-col cols="12">
                        <v-divider />

                      </v-col>
                    </v-row>
                  </td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>



<!--            <v-chip color="primary" class="font-weight-bold">제목</v-chip>-->
<!--            <v-text-field :value="item.title"></v-text-field>-->
          </v-card>
        </v-col>
      </v-row>
      <v-divider/>


    </v-container>

  </v-sheet>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {sampleQuestion2, viewInfo} from "@/util/default-setting/sample/sample-question";
import {Survey} from "@/interface/survey-question";

@Component({components:{}})
export default class QuestionManageView extends Vue{
  questionInfo:Survey.Question[] = [];

  mounted(){
    this.questionInfo = sampleQuestion2.map((value)=>{
      const findInfo = viewInfo.filter((v)=> v.questionSEQ === value.seq).map((findItem)=>{
        return {
          ...findItem,
          isAllDisable: false,
          addText: false
        }
      })

      return {
        ...value,
        viewInfo: findInfo,
      }
    });

  }
}
</script>

<style scoped>

</style>
