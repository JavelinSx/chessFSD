<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Chess Game</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; 2024 Chess Game</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
