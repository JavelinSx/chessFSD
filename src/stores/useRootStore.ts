// Utilities
import { defineStore } from 'pinia'
import { useBoardStore } from '../modules/board/store/boardStore'

export const useRootStore = defineStore('root', {
  state: () => ({
    gameStarted: false
  }),
  actions:{
    initializeGame() {
      this.gameStarted = true
      const boardStore = useBoardStore()
      boardStore.initializeBoard()
    }
  }
})
