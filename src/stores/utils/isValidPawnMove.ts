import { IPiece } from '../../types/Piece';
import { IValidPieceMove } from '../../types/ValidPieceMove';

// Проверка хода для пешки
export function isValidPawnMove({piece, from, to, board}: IValidPieceMove): boolean {
  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;
  const targetCell: IPiece | null = board[toRow][toCol];

  const isValidMove = (): boolean => {
    if (piece.color==='white') {
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
      if (piece.color==='white') {
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
      return targetCell !== null && targetCell.color !== piece.color;
    }
    return false;
  };

  return isValidMove() && isPathEmpty();
}
