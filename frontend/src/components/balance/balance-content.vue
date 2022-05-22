<template>
  <v-card height="300" outlined class="font-content">
    <v-row class="fill-height ma-0">
      <v-col cols="6" class="pa-0 pt-2 pb-2 overflow-hidden">
        <v-btn
          @click="clickAnswer(clickInfo.typeA)"
          class="white--text text-h5 d-block"
          height="100%"
          color="pink darken-2"
        >
          <div class="text-wrap font-content">
            <v-scale-transition>
              <v-icon
                v-if="syncSelectA"
                color="white"
                size="48"
                v-text="'mdi-check-circle-outline'"
              ></v-icon>
            </v-scale-transition>
            엄청난 실력자가 되어서 코딩세계를 재패하며 ie쓰기
            <v-progress-linear
              style="width: 300px"
              class="ma-auto"
              v-if="isAllClick"
              value="50"
              color="amber lighten-2"
              height="25"
              >50%
            </v-progress-linear>
          </div>
        </v-btn>
      </v-col>
      <v-col cols="6" class="pa-0 pt-2 pb-2 overflow-hidden">
        <v-btn
          @click="clickAnswer(clickInfo.typeB)"
          class="white--text text-h5"
          height="100%"
          color="deep-purple darken-2"
          block
        >
          <div class="text-wrap font-content">
            <v-scale-transition>
              <v-icon
                v-if="syncSelectB"
                color="white"
                size="48"
                v-text="'mdi-check-circle-outline'"
              ></v-icon>
            </v-scale-transition>
            컴퓨터 부수기
            <v-progress-linear
              style="width: 300px"
              v-if="isAllClick"
              class="ma-auto"
              :value="testNumber"
              color="amber lighten-2"
              height="25"
              >{{ testNumber }}%
            </v-progress-linear>
          </div>
        </v-btn>
      </v-col>
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
  @PropSync('selectedA') syncSelectA?: boolean;
  @PropSync('selectedB') syncSelectB?: boolean;
  private overlay: boolean = false;
  private testNumber: number = 0;
  private clickInfo: Balance.Setting = {
    typeA: 'A',
    typeB: 'B',
  };

  async initValue() {
    await this.addNumber();
    if (this.testNumber >= 100) return;
    const a = setInterval(() => {
      if (this.testNumber >= 99) clearInterval(a);
      this.testNumber++;
    }, 5);
  }

  async addNumber() {}

  private isAllClick: boolean = false;

  @Emit()
  clickAnswer(type: balanceType) {
    this.isAllClick = true;
    this.overlay = !this.overlay;
    this.initValue();
    return type;
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
