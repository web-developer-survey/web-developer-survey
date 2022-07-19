<template>
  <v-app id="inspire" class="indigo lighten-5">
    <v-container>
      <!--top bar -->
      <v-app-bar app color="white" dense>
        <v-toolbar-title>Balance Game for Dev</v-toolbar-title>
      </v-app-bar>
      <!--top bar -->

      <!-- content -->
      <v-sheet max-width="800" style="padding: 48px 0 0" class="ma-auto" elevation="3" color="grey">
        <v-row justify="center">
          <v-col cols="12">
            <v-sheet max-height="750" class="left v-alert__border--right">
              <!-- content header -->
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
              <!-- content header -->

              <!-- content -->
              <v-sheet max-height="420">
                <slot name="content" />
              </v-sheet>
              <!-- content -->

              <!-- banner -->
              <v-sheet height="150" v-if="true" color="grey" class="pa-1">
                <slot name="banner" />
              </v-sheet>
              <!-- banner -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
      <!-- content -->
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

.font-top-title {
  background: #0f140f;
  color: rgba(255, 255, 255, 0.75);
  font-family: 'VT323', monospace;
  font-size: 18px;
  text-shadow: 0 0 5px rgba(255, 240, 255, 0.5), 0 0 15px rgba(240, 230, 250, 1);
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
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
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
