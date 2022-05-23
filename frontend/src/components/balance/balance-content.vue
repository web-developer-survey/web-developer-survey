<template>
  <v-card  outlined>
    <v-row class="fill-height ma-0">
      <v-col cols="12" class="pa-3 pt-2 pb-2 overflow-hidden" >

        <v-card
            elevation="2"
            outlined
          @click="clickAnswer(clickInfo.typeA)"
          height="150"
            class="balance-border1"
        >
          <div>
            <v-system-bar
                window
                color="fff"
            >
              <v-icon>mdi-message</v-icon>
              <span>선택지 A</span>
              <v-spacer></v-spacer>
              <v-icon>mdi-minus</v-icon>
              <v-icon>mdi-checkbox-blank-outline</v-icon>
              <v-icon>mdi-close</v-icon>
            </v-system-bar>
          </div>
          <v-card color='#0F0F0F' height="130"   class=" d-flex justify-center " style="align-items: center">
            <div class="text-wrap text-center font-content">
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
                  style="width: 200px"
                  class="ma-auto"
                  v-if="isAllClick"
                  :value="testNumber"
                  color="amber lighten-2"
                  height="25"
              >{{ testNumber }}%
              </v-progress-linear>
            </div>
          </v-card>

        </v-card>
      </v-col>

      <v-col cols="12" class="pa-3 pt-2 pb-2 overflow-hidden">
        <v-card
            elevation="2"
            outlined
          @click="clickAnswer(clickInfo.typeB)"
            height="150"
            class=" balance-border2"
        >
          <div>
            <v-system-bar
                window
                color="fff"
            >
              <v-icon>mdi-message</v-icon>
              <span>선택지 B</span>
              <v-spacer></v-spacer>
              <v-icon>mdi-minus</v-icon>
              <v-icon>mdi-checkbox-blank-outline</v-icon>
              <v-icon>mdi-close</v-icon>
            </v-system-bar>
          </div>
          <v-card color='#0F0F0F' height="150"    class=" d-flex justify-center " style="align-items: center">
          <div class="text-wrap text-center font-content">
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
              style="width: 200px"
              class="ma-auto"
              v-if="isAllClick"
              :value="testNumber"
              color="amber lighten-2"
              height="25"
              >{{ testNumber }}%
            </v-progress-linear>
          </div>
          </v-card>
        </v-card>
      </v-col>

<!--      <v-overlay absolute :value="isAllClick">-->
<!--        <v-btn color="success" @click="isAllClick = false"> Hide Overlay</v-btn>-->
<!--      </v-overlay>-->
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, PropSync, Vue } from 'vue-property-decorator';
import { balanceType } from '@/common/type/balance';
import { Balance } from '@/common/interface/balance';

@Component({
  components: {},
})
export default class BalanceContent extends Vue {
  //#todo: 리팩토링 예정

  @PropSync('labelA') syncLabelA: string;
  @PropSync('labelB') syncLabelB: string;
  private overlay: boolean = false;
  private testNumber: number = 0;
  private isAllClick: boolean = false;
  private select: balanceType;

  private clickInfo: Balance.Setting = {
    typeA: 'A',
    typeB: 'B',
  };

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

  get selectA(): boolean {
    return this.select === 'A';
  }

  get selectB(): boolean {
    return this.select === 'A';
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.font-content{
  background: #0F140F;
  color: rgba(125,225,125,0.75);
  font-family: 'VT323', monospace;
  font-size: 16px;
  text-shadow: 0 0 5px rgba(125,225,125,0.5), 0 0 15px rgba(125,250,125,1);
}

@keyframes ScreenEffect {
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
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
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
}
</style>
