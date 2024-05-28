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
  const targetPiece: string | null = board[toRow][toCol];

  const isValidMove = (): boolean => {
    if (isWhite) {
      return (
        (toRow === fromRow - 1 && fromCol === toCol) || // обычный ход пешки
        (fromRow === 6 && toRow === 4 && fromCol === toCol) || // начальный ход пешки на 2 клетки
        (toRow === fromRow - 1 && Math.abs(toCol - fromCol) === 1) // взятие фигуры по диагонали
      );
    } else {
      return (
        (toRow === fromRow + 1 && fromCol === toCol) || // обычный ход пешки
        (fromRow === 1 && toRow === 3 && fromCol === toCol) || // начальный ход пешки на 2 клетки
        (toRow === fromRow + 1 && Math.abs(toCol - fromCol) === 1) // взятие фигуры по диагонали
      );
    }
  };

  const isPathEmpty = (): boolean => {
    if (fromCol === toCol) {
      if (isWhite) {
        if (fromRow === 6 && toRow === 4) {
          return board[5][toCol] === null && board[4][toCol] === null;
        }
        return board[toRow][toCol] === null;
      } else {
        if (fromRow === 1 && toRow === 3) {
          return board[2][toCol] === null && board[3][toCol] === null;
        }
        return board[toRow][toCol] === null;
      }
    }
    if (Math.abs(fromCol - toCol) === 1) {
      return targetPiece !== null && targetPiece.toUpperCase() !== piece.toUpperCase();
    }
    return false;
  };

  return isValidMove() && isPathEmpty();
}
