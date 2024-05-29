// Экспорт компонентов
export { default as ChessBoard } from './components/ChessBoard.vue';

// Экспорт стора
export { useBoardStore } from './store/boardStore';

// Экспорт утилит
export { initialBoardSetup } from './utils/initialBoardSetup';


// Экспорт функций валидации
export * from '../../stores/helpers/moveValidation';
