<template>
  <v-app-bar app color="lighten-4 grey" flat>
    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab v-for="link in links" :key="link" >
        {{ link }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Header extends Vue {
  private links: string[] = ["Survey", "Result"];


}
</script>

<style scoped></style>
