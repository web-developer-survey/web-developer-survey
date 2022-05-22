<template>
  <v-card height="300" outlined class="font-content">
    <v-row class="fill-height ma-0">
      <v-col cols="6" class="pa-0 pt-2 pb-2 overflow-hidden">
        <v-card
          @click="clickAnswer(clickInfo.typeA)"
          height="100%"
          color="pink darken-2"
          class="white--text text-h5 d-flex justify-center"
          style="align-items: center"
        >
          <div class="text-wrap text-center font-content">
            <v-scale-transition>
              <v-icon
                v-if="selectA"
                color="white"
                size="48"
                v-text="'mdi-check-circle-outline'"
              ></v-icon>
            </v-scale-transition>
            {{ syncLabelA }}
            <v-progress-linear
              style="width: 300px"
              class="ma-auto"
              v-if="isAllClick"
              :value="testNumber"
              color="amber lighten-2"
              height="25"
              >{{ testNumber }}%
            </v-progress-linear>
          </div>
        </v-card>
      </v-col>

      <v-col cols="6" class="pa-0 pt-2 pb-2 overflow-hidden">
        <v-card
          @click="clickAnswer(clickInfo.typeB)"
          height="100%"
          color="deep-purple darken-2"
          class="white--text text-h5 d-flex justify-center"
          style="align-items: center"
        >
          <div class="text-wrap text-center font-content">
            <v-scale-transition>
              <v-icon
                v-if="selectB"
                color="white"
                size="48"
                v-text="'mdi-check-circle-outline'"
              ></v-icon>
            </v-scale-transition>
            {{ syncLabelB }}
            <v-progress-linear
              style="width: 300px"
              class="ma-auto"
              v-if="isAllClick"
              :value="testNumber"
              color="amber lighten-2"
              height="25"
              >{{ testNumber }}%
            </v-progress-linear>
          </div>
        </v-card>
      </v-col>

      <v-overlay absolute :value="isAllClick">
        <v-btn color="success" @click="isAllClick = false"> Hide Overlay</v-btn>
      </v-overlay>
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
@font-face {
  font-family: 'Donoun-Medium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Donoun-Medium.woff2')
    format('woff2');
  font-weight: normal;
  font-style: normal;
}

.font-content {
  font-family: 'Donoun-Medium', serif;
}

.test {
  text-align: center;
  color: white;
  font-size: 20px;
  position: absolute;
}
</style>
