// Экспорт компонентов
export { default as ChessBoard } from './components/ChessBoard.vue';
export { default as ChessPiece } from './components/ChessPiece.vue';
export { default as Square } from './components/Square.vue';

// Экспорт стора
export { useBoardStore } from './store/boardStore';

// Экспорт утилит
export { initialBoardSetup } from './utils/initialBoardSetup';

// Экспорт констант
export * from './constant/iconsPiece';

// Экспорт функций валидации
export * from './helpers/moveValidation';
