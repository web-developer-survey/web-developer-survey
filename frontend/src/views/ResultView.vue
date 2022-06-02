<template>
  <div class="result-view">
    <result-header />

    <main class="result-view__chapters">

      <!-- 목차 -->
      <result-card title="INDEX">
        <v-row class="no-gutters">
          <v-col class="col-4">
            <img src="https://dummyimage.com/400x422/000/fff.png" alt="" />
          </v-col>

          <v-col class="col-7 ml-auto">
            <nav class="result-view__navigation">
              <dl class="result-view__abouts">
                <div v-for="(chapter, i) in chapters" class="result-view__about" :style="{ gridRow: (i + 1) % 4 }">
                  <dt>{{ chapter.title }}</dt>
                  <dd>{{ chapter.about }}</dd>
                </div>
              </dl>
            </nav>
          </v-col>
        </v-row>
      </result-card>

      <!-- 항목 별 생성 기능 -->
      <div v-for="(chapter, i) in chapters" :key="i" class="result-view__chapter">
          <result-card :title="`Chapter ${i + 1}. ${chapter.title}`">
            <p>{{ chapter.description }}</p>

            <div>
              TODO: 아래에 차트 표시
            </div>
          </result-card>
        </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ResultHeader from '@/components/result/result-header.vue'
import ResultCard from '@/components/result/result-card.vue'

@Component({
  components: { 
    ResultHeader, 
    ResultCard 
  }
})
export default class ResultView extends Vue {
  chapters = [
    // TODO: 더미데이터
    { title: '대한민국헌법', about: '대한민국은 민주공화국이다.', description: '유구한 역사와 전통에 빛나는 우리 대한국민은 3ㆍ1운동으로 건립된 대한민국임시정부의 법통과 불의에 항거한 4ㆍ19민주이념을 계승하고, 조국의 민주개혁과 평화적 통일의 사명에 입각하여 정의ㆍ인도와 동포애로써 민족의 단결을 공고히 하고, 모든 사회적 폐습과 불의를 타파하며, 자율과 조화를 바탕으로 자유민주적 기본질서를 더욱 확고히 하여 정치ㆍ경제ㆍ사회ㆍ문화의 모든 영역에 있어서 각인의 기회를 균등히 하고, 능력을 최고도로 발휘하게 하며, 자유와 권리에 따르는 책임과 의무를 완수하게 하여, 안으로는 국민생활의 균등한 향상을 기하고 밖으로는 항구적인 세계평화와 인류공영에 이바지함으로써 우리들과 우리들의 자손의 안전과 자유와 행복을 영원히 확보할 것을 다짐하면서 1948년 7월 12일에 제정되고 8차에 걸쳐 개정된 헌법을 이제 국회의 의결을 거쳐 국민투표에 의하여 개정한다. ', data: [] },
    { title: '국민의 권리와 의무', about: '모든 권력은 국민으로부터 나온다. ', description: '①모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포ㆍ구속ㆍ압수ㆍ수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌ㆍ보안처분 또는 강제노역을 받지 아니한다. ②모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. ③체포ㆍ구속ㆍ압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다. ④누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다. ⑤누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는 구속을 당한 자의 가족등 법률이 정하는 자에게는 그 이유와 일시ㆍ장소가 지체없이 통지되어야 한다. ⑥누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. ⑦피고인의 자백이 고문ㆍ폭행ㆍ협박ㆍ구속의 부당한 장기화 또는 기망 기타의 방법에 의하여 자의로 진술된 것이 아니라고 인정될 때 또는 정식재판에 있어서 피고인의 자백이 그에게 불리한 유일한 증거일 때에는 이를 유죄의 증거로 삼거나 이를 이유로 처벌할 수 없다. ', data: [] },
    { title: '훈민정음', about: '훈민정음 스물 여덟 글자는 각각 다음과 같은 모양을 본떠서 만들었다. ', description: '천지의 도는 오직 음양오행뿐이다. 곤(坤)과 복(復) 사이가 태극이 되고, 움직이고 멈춘 뒤에 음양이 된다. 무릇 어떤 살아가는 무리든 하늘과 땅 사이에 있는 것들이 음양을 버리고 어디로 갈 것인가? 그러므로 사람의 소리에도 다 음양의 이치가 있는데, 사람이 살피지 않을 뿐이다. 이제 훈민정음을 만든 것도, 처음부터 슬기로써 마련하고 힘으로써 찾아낸 것이 아니라, 다만 그 소리를 바탕으로 그 이치를 다할 따름이다. 이치가 이미 둘이 아니거늘, 어찌 능히 하늘과 땅과 귀신과 더불어 그 씀을 함께 하지 않을 수 있겠는가?' },
  ]  
}
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

  img {
    max-width: 100%;
  }

  &__navigation {
    width: 100%;
    height: 100%;
  }

  &__abouts {
    display: grid;
    grid-gap: 1em;
    width: 100%;
    height: 100%;
    max-height: 100%;
  }

  &__about {
    dt {
      font-size: 1.2em;
      font-weight: 700;
      line-height: 1.25;
      color: #484848;
    }

    dd {
      margin-top: 0.5em;
      font-size: 0.8em;
      font-weight: 500;
      color: #555555;
    }
  }

  &__chapters {
    padding: 4rem 5rem;
  }

  &__chapter {
    margin-top: 5rem;
  }
}
</style>