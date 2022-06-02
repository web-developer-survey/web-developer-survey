<template>
  <div class="result-view">
    <result-header />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ResultHeader from '@/components/result/result-header.vue'

@Component({
  components: { 
    ResultHeader, 
    ResultCard 
  }
})
export default class ResultView extends Vue {}
</script>

<style lang="scss" scoped>
 // TODO: 글로벌 사용? 결과 페이지만?
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@import url('https://dun.land/pretendard/v1.3.3/pretendard.min.css');

.result-view {
  width: 100%;
  min-height: 100vh;
  background-color: #E0E0E0;
  box-sizing: border-box;

  font-family: Montserrat, Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 400;
}
</style>