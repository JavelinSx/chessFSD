import { defineStore } from 'pinia';

export const useHostoryStore = defineStore({
  id: 'history',
  state: () => ({
    boardHistory: [],
    whitePiecesReset: [],
    blackPiecesReset: [],
    indexBoardHistory: 0
  }),
  getters: {
    getBoardHistory: (state) => state.boardHistory,
    getWhitePiecesReset: (state) => state.whitePiecesReset,
    getBlackPiecesReset: (state) => state.blackPiecesReset,
  },
  actions: {
    addMove(boardState:[][]){
      this.boardHistory.push(boardState)
    },
    prevMove(){
      if(this.indexBoardHistory!==0){
        this.indexBoardHistory -= 1
      }
    },
    nextMove(){
      if(this.indexBoardHistory<0){
        this.indexBoardHistory += 1
      }
    },
    addWhitePieceReset(piece: string){
      this.whitePiecesReset.push(piece)
    },
    addBlackPieceReset(piece:string){
      this.blackPiecesReset.push(piece)
    }
  }
})
