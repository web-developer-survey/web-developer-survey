<template>
  <v-app id="inspire" class="indigo lighten-5">
    <v-container>
      <v-app-bar app color="white" dense>
        <v-toolbar-title>Balance Game for Dev</v-toolbar-title>
      </v-app-bar>

      <v-sheet max-width="800" style="padding: 48px 0px 0px" class="ma-auto" elevation="3">
        <v-row justify="center">
          <v-col cols="12">
            <v-sheet max-height="750" class="left v-alert__border--right">
              <v-card max-height="200" class="pa-3" color="#0F0F0F" tile>
                <v-card-text text>
                  <h3 class="text-h5 font-top-title">
                    <v-icon color="font-top-title">mdi-robot-angry</v-icon>
                    <small>Question_0xFF</small>
                  </h3>
                  <div class="mt-2 font-top-title">
                    <slot name="title" />
                    <small class="Pulse">_</small>
                  </div>
                </v-card-text>
              </v-card>

              <v-sheet max-height="420">
                <slot name="content" />
              </v-sheet>

              <v-sheet height="150" v-if="true">
                <slot name="banner" />
              </v-sheet>
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/common/banner.vue';

@Component({
  components: { Banner },
})
export default class BalanceLayout extends Vue {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.font-title {
  background: #0f140f;
  color: rgba(125, 225, 125, 0.75);
  font-family: 'VT323', monospace;
  font-size: 18px;
  text-shadow: 0 0 5px rgba(125, 225, 125, 0.5), 0 0 15px rgba(125, 250, 125, 1);
}

.font-top-title {
  background: #0f140f;
  color: rgba(255, 255, 255, 0.75);
  font-family: 'VT323', monospace;
  font-size: 18px;
  text-shadow: 0 0 5px rgba(255, 240, 255, 0.5), 0 0 15px rgba(240, 230, 250, 1);
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
