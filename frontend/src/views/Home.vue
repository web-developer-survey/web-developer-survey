<template>
  <v-main class="grey lighten-5">
    <v-sheet class="ma-auto" max-width="1000">
      <v-system-bar color="indigo darken-2" dark>
        <v-spacer></v-spacer>
      </v-system-bar>

      <v-toolbar class="justify-center" color="indigo" dark>
        <v-toolbar-title>Web Developer Survey</v-toolbar-title>
      </v-toolbar>
    </v-sheet>

    <v-container class="justify-center" fluid>
      <v-sheet class="ma-auto" max-width="800">
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card :href="card.link" :target="card.isBlank ? 'blank' : ''">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="220px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-card-subtitle>
                  {{ card.subTitle }}
                </v-card-subtitle>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const mainSurvey = './main/main-survey.jpg';

// const mainResult = require('@/assets/main/main-result.jpg');
// const mainBalance = require('@/assets/main/main-balance.jpg');
const mainBalance = './main/main-balance.jpg';
const mainResult = './main/main-result.jpg';

@Component({
  components: {},
})
export default class Home extends Vue {
  items = [
    { title: '질문지', href: 'question', icon: 'mdi-book-open-page-variant-outline' },
    { title: '결과 보고서', href: 'result', icon: 'mdi-chart-bar' },
    { title: '밸런스 게임', href: 'balance', icon: 'mdi-gamepad-variant' },
  ];

  cards = [
    {
      title: '웹 개발자 설문 조사',
      src: './main/main-survey.jpg',
      flex: 12,
      link: 'question',
      isBlank: true,
      subTitle: '웹 개발자 설문조사 ( 2022.~~ )',
    },
    {
      title: '개발자 밸런스 게임',
      src: './main/main-balance.jpg',
      flex: 6,
      link: 'balance',
      isBlank: false,
      subTitle: '화가 나는 밸런스 게임',
    },
    {
      title: '설문 결과 보고서',
      src: './main/main-result.jpg',
      flex: 6,
      link: 'result',
      isBlank: false,
      subTitle: '설문 결과 보고서(open: ~~ )',
    },
  ];
  right = null;

  test() {}
}
</script>
