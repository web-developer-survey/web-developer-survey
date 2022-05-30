<template>
  <v-sheet>
    <v-card :max-height="cardHeight" tile color="grey">
      <v-row class="fill-height ma-0">
        <v-col :class="`overflow-hidden ${noneEventCss}`" cols="12" md="6">
          <v-sheet :height="parentHeight" @click="clickAnswer(clickInfo.typeA)">
            <balance-content-top text="A" />
            <v-card
              :height="syncHeight"
              class="d-flex justify-center"
              color="#0F0F0F"
              style="align-items: center; overflow-y: auto"
            >
              <div class="text-wrap text-center font-content" style="max-width: 20em">
                <v-scale-transition>
                  <v-icon
                    v-if="selectA"
                    color="white"
                    size="48"
                    v-text="'mdi-check-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
                {{ syncLabelA }} <span class="Pulse">Click!</span>
                <v-progress-linear
                  v-if="isAllClick"
                  :value="resultA"
                  class="ma-auto"
                  color="amber lighten-2"
                  height="25"
                  style="width: 200px"
                  >{{ resultA }}%
                </v-progress-linear>
              </div>
            </v-card>
          </v-sheet>
        </v-col>

        <v-col :class="`overflow-hidden ${noneEventCss}`" cols="12" md="6">
          <v-sheet :height="parentHeight" @click="clickAnswer(clickInfo.typeB)">
            <balance-content-top text="B" />
            <v-card
              :height="syncHeight"
              class="d-flex justify-center pa-3"
              color="#0F0F0F"
              style="align-items: center; overflow-y: auto"
            >
              <div class="text-wrap text-center font-content" style="max-width: 20em">
                <v-scale-transition>
                  <v-icon
                    v-if="selectB"
                    color="white"
                    size="48"
                    v-text="'mdi-check-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
                {{ syncLabelB }} <span class="Pulse">Click!</span>
                <v-progress-linear
                  v-if="isAllClick"
                  :value="resultB"
                  class="ma-auto"
                  color="amber lighten-2"
                  height="25"
                  style="width: 200px"
                  >{{ resultB }}%
                </v-progress-linear>
              </div>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
      <v-overlay absolute :value="overlay" @click="nextQuestion" class="pointer">
        <v-card-title>
          <small>{{ nextCnt }}초후</small>&nbsp;자동으로 다음질문 넘어갑니다!
          <v-icon>mdi-cat</v-icon>
        </v-card-title>

        <v-card-subtitle
          ><b class="click-pointer">
            <v-icon color="#ffea00">mdi-rodent</v-icon>
            클릭</b
          >시 바로 넘어갑니다!
        </v-card-subtitle>
      </v-overlay>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Emit, PropSync, Vue } from 'vue-property-decorator';
import { balanceType } from '@/common/type/balance';
import { Balance } from '@/common/interface/balance';
import BalanceContentTop from '@/components/balance/detail/content/content-bar/balance-content-top.vue';

@Component({
  components: { BalanceContentTop },
})
export default class BalanceContent extends Vue {
  @PropSync('labelA') syncLabelA: string;
  @PropSync('labelB') syncLabelB: string;
  @PropSync('height') syncHeight: number;
  private nextTimer: ReturnType<typeof setTimeout> = setTimeout(() => {});
  private cntTimer: ReturnType<typeof setTimeout> = setTimeout(() => {});
  private nextCnt: number = 4;
  private overlay: boolean = false;
  private isAllClick: boolean = false;
  private select: balanceType;

  private resultA: number = 0;
  private resultB: number = 0;
  private completeA: boolean = false;
  private completeB: boolean = false;

  private clickInfo: Balance.Setting = {
    typeA: 'A',
    typeB: 'B',
  };

  private timerOption = {
    nextQuestion: 4000,
    showOverlay: 1000,
    timeCnt: 1000,
  };

  reset() {
    this.nextCnt = 4;
    this.isAllClick = false;
    this.overlay = false;
    this.select = null;
    this.resultA = 0;
    this.resultB = 0;
    this.completeA = false;
    this.completeB = false;
    clearTimeout(this.nextTimer);
    clearInterval(this.cntTimer);
    this.nextTimer = setTimeout(() => {});
    this.cntTimer = setTimeout(() => {});
  }

  initValueA(max: number) {
    this.resultA = 0;
    if (!max) return;
    const speed = 10 - max;
    const addInterval = setInterval(() => {
      if (max === this.resultA) {
        clearInterval(addInterval);
        this.completeA = true;
        return false;
      }
      ++this.resultA;
    }, speed);
  }

  initValueB(max: number) {
    this.resultB = 0;
    if (!max) return;
    const speed = 10 - max;
    const addInterval = setInterval(() => {
      if (max === this.resultB) {
        clearInterval(addInterval);
        this.completeB = true;
        return false;
      }
      ++this.resultB;
    }, speed);
  }

  complete() {
    this.nextTimer = setTimeout(() => {
      this.nextQuestion();
    }, this.timerOption.nextQuestion);

    this.cntTimer = setInterval(() => {
      this.nextCnt--;
    }, 1000);
  }

  @Emit()
  clickAnswer(type: balanceType) {
    if (this.isAllClick) return;
    this.select = type;
    this.isAllClick = true;

    setTimeout(() => {
      this.overlay = true;
    }, this.timerOption.showOverlay);

    // const interval = setInterval(() => {
    //   if (interval <= 0) clearInterval(interval);
    //   --this.nextCnt;
    // }, 1000);

    return type;
  }

  @Emit()
  nextQuestion() {
    this.reset();
  }

  // get cnt(): number {
  //   return;
  // }

  get selectA(): boolean {
    return this.select === 'A';
  }

  get selectB(): boolean {
    return this.select === 'A';
  }

  get parentHeight(): number {
    return this.syncHeight + 30;
  }

  get cardHeight(): number {
    return this.syncHeight * 2 + 120;
  }

  get noneEventCss(): string {
    return this.isAllClick ? 'none-click' : '';
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.none-click {
  pointer-events: none;
}

.pointer {
  cursor: pointer;
}

.click-pointer {
  color: #ffea00;
}

.font-content {
  background: #0f140f;
  color: rgba(125, 225, 125, 0.75);
  font-family: 'VT323', monospace;
  font-size: 1em;
  text-shadow: 0 0 5px rgba(125, 225, 125, 0.5), 0 0 15px rgba(125, 250, 125, 1);
}

.Pulse {
  animation: Pulse 1.5s ease infinite;
}

@keyframes ScreenEffect {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
