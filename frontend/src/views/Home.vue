<template>
  <v-main class="grey lighten-5">
    <v-container class="justify-center">
      <v-card class="ma-auto" elevation="1" outlined width="800">
        <v-app-bar
            color="rgba(0, 0, 0, 0)"
            flat
        >

          <v-icon color="purple darken-2">
            mdi-dialpad
          </v-icon>
          <v-toolbar-title class="text-h6 font-weight-bold  pl-0">
            설문에 참여해주세요!
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
              color="white"
              icon
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-img
            class="ma-auto "
            lazy-src="https://pbs.twimg.com/media/DP8PRviVQAA6oJZ?format=jpeg"
            max-height="500"
            max-width="500"
            src="https://pbs.twimg.com/media/DP8PRviVQAA6oJZ?format=png"/>
        <v-divider class="mx-4 ma-2"></v-divider>
        <v-list
            dense
            nav
            shaped
        >
          <v-list-item
              v-for="item in items"
              :key="item.title"
              :href="item.href"
              link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="deep-purple--text text--lighten-2">
              <v-list-item-title>

                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  items = [
    {title: '질문지', href: 'question', icon: 'mdi-book-open-page-variant-outline'},
    {title: '결과 보고서', href: 'result', icon: 'mdi-chart-bar'},
  ]
  right = null
}
</script>
