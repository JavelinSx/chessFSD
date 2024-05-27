import { CellPosition } from '../helpers/moveValidation';

// Проверка хода для пешки
export function isValidPawnMove(
  piece: string,
  from: CellPosition,
  to: CellPosition,
  board: (string | null)[][]
): boolean {
  const isWhite = piece.toUpperCase() === piece;
  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;
  const targetPiece = board[toRow][toCol] || '';

  if (isWhite) {

    return (
      (toRow === fromRow - 1 && fromCol === toCol && board[toRow][toCol] === null) || // обычный ход пешки
      (fromRow === 6 && toRow === 4 && fromCol === toCol && board[5][toCol] === null && board[4][toCol] === null) || // начальный ход пешки на 2 клетки
      (toRow === fromRow - 1 && Math.abs(toCol - fromCol) === 1 && board[toRow][toCol] !== null && targetPiece.toUpperCase() !== piece.toUpperCase()) // взятие фигуры по диагонали
    );
  } else {
    return (
      (toRow === fromRow + 1 && fromCol === toCol && board[toRow][toCol] === null) || // обычный ход пешки
      (fromRow === 1 && toRow === 3 && fromCol === toCol && board[2][toCol] === null && board[3][toCol] === null) || // начальный ход пешки на 2 клетки
      (toRow === fromRow + 1 && Math.abs(toCol - fromCol) === 1 && board[toRow][toCol] !== null && targetPiece.toUpperCase() !== piece.toUpperCase()) // взятие фигуры по диагонали
    );
  }
}

// Проверка пустоты пути для пешки
export function isPawnPathClear(
  piece: string,
  from: CellPosition,
  to: CellPosition,
  board: (string | null)[][]
): boolean {
  const isWhite = piece.toUpperCase() === piece;
  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;

  if (fromCol === toCol) {
    if (isWhite) {
      if (toRow === fromRow - 1 && board[toRow][toCol] === null) {
        return true;
      }
      if (fromRow === 6 && toRow === fromRow - 2 && board[toRow][toCol] === null && board[fromRow - 1][toCol] === null) {
        return true;
      }
    } else {
      if (toRow === fromRow + 1 && board[toRow][toCol] === null) {
        return true;
      }
      if (fromRow === 1 && toRow === fromRow + 2 && board[toRow][toCol] === null && board[fromRow + 1][toCol] === null) {
        return true;
      }
    }
  }
  if (Math.abs(fromCol - toCol) === 1 && board[toRow][toCol] !== null) {
    if (isWhite && toRow === fromRow - 1) {
      return true;
    }
    if (!isWhite && toRow === fromRow + 1) {
      return true;
    }
  }
  return false;
}
