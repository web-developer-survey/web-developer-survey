<template>
  <v-app id="inspire">
    <v-main class="lighten-2">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10">
            <v-sheet max-height="70vh" rounded="lg">
              <slot />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>
