<template>
  <v-container class="board-container">
    <ChessBoard />
  </v-container>
</template>

<script setup lang="ts">
import ChessBoard from '../components/ChessBoard.vue';
</script>

<style scoped>
.board-container{
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
