<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useRootStore } from './stores/useRootStore';
import { onMounted } from 'vue';

const rootStore = useRootStore();

onMounted(() => {
  rootStore.initializeGame();
});
</script>
