<template>
  <v-sheet>
    <v-card :max-height="cardHeight" tile>
      <v-row class="fill-height ma-0">
        <v-col class="overflow-hidden" cols="12" md="6">
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
                  :value="testNumber"
                  class="ma-auto"
                  color="amber lighten-2"
                  height="25"
                  style="width: 200px"
                  >{{ testNumber }}%
                </v-progress-linear>
              </div>
            </v-card>
          </v-sheet>
        </v-col>

        <v-col class="overflow-hidden" cols="12" md="6">
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
                  :value="testNumber"
                  class="ma-auto"
                  color="amber lighten-2"
                  height="25"
                  style="width: 200px"
                  >{{ testNumber }}%
                </v-progress-linear>
              </div>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
      <!--      <v-overlay absolute :value="isAllClick">-->
      <!--        <v-btn color="deep-purple accent-4" @click="nextQuestion">Next Question</v-btn>-->
      <!--      </v-overlay>-->
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
  //#todo: 리팩토링 예정

  @PropSync('labelA') syncLabelA: string;
  @PropSync('height') syncHeight: number;
  @PropSync('labelB') syncLabelB: string;

  private overlay: boolean = false;
  private testNumber: number = 0;
  private isAllClick: boolean = false;
  private select: balanceType;

  private clickInfo: Balance.Setting = {
    typeA: 'A',
    typeB: 'B',
  };

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

  async initValue() {
    if (this.testNumber >= 99) return;
    const a = setInterval(() => {
      if (this.testNumber >= 99) clearInterval(a);
      this.testNumber++;
    }, 5);
  }

  @Emit()
  clickAnswer(type: balanceType) {
    this.select = type;
    this.isAllClick = true;
    this.overlay = !this.overlay;
    this.initValue();
    return type;
  }

  @Emit()
  nextQuestion() {
    //#todo 초기화
    this.isAllClick = false;
    this.select = null;
    this.testNumber = 0;
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.font-content {
  background: #0f140f;
  color: rgba(125, 225, 125, 0.75);
  font-family: 'VT323', monospace;
  font-size: 1em;
  text-shadow: 0 0 5px rgba(125, 225, 125, 0.5), 0 0 15px rgba(125, 250, 125, 1);
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

.Pulse {
  animation: Pulse 1.5s ease infinite;
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
