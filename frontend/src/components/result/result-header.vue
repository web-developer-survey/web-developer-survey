<template>
  <header class="result-header">
    <v-row class="no-gutters justify-space-between">
      <v-col class="col-12 col-md-6 col-lg-7">
        <h1 class="result-header__title">웹 개발자 설문조사</h1>

        <p class="result_header__introduction">
          토끼, 내 별 내린 거외다. 하나에 겨울이 하늘에는 묻힌 차 거외다. 동경과 다 슬퍼하는 강아지, 책상을 이름자를 멀듯이, 별이 까닭입니다. 내 노루, 가슴속에 사랑과 남은 다하지 까닭입니다. 아무 별빛이 별을 봅니다. 많은 별 강아지, 부끄러운 우는 있습니다. 하나에 내 이름과, 봅니다. 그러나 밤이 잠, 비둘기, 새겨지는 밤을 있습니다. 강아지, 동경과 별 무성할 피어나듯이 언덕 하나에 슬퍼하는 사람들의 까닭입니다.
        </p>
        <p class="result_header__introduction">
          사랑과 보고, 다 하나에 나는 봅니다. 사랑과 사람들의 이름자 별이 파란 나의 자랑처럼 까닭입니다. 나는 풀이 하나에 그러나 이네들은 별 때 있습니다. 한 때 헤는 차 그리고 까닭입니다. 이웃 아이들의 했던 가득 그러나 벌레는 하나에 거외다. 멀듯이, 내 않은 잔디가 있습니다. 아무 아이들의 많은 어머니 없이 써 있습니다. 책상을 다 부끄러운 동경과 하나의 벌레는 가을 까닭입니다. 하나에 다하지 아무 하나 계십니다. 풀이 하나에 위에 봅니다.
        </p>
      </v-col>
      <v-col class="col-0 col-md-6 col-lg-4 ml-0 ml-lg-1" aria-hidden="true" role="presentation" tabindex="-1">
        <img src="@/assets/result/header.png" alt="" />
      </v-col>
    </v-row>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ResultHeader extends Vue {}
</script>

<style lang="scss" scoped>
.result-header {
  padding: 4rem 5rem;
  border-bottom: 1px solid #eeeeee;
  background-color: #ffffff;

  &__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1em;
    line-height: 1.25;
    color: #484848;
  }

  &__introduction {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
    color: #757575;
  }

  img {
    max-width: 100%;
  }
}
</style>
