import { IPiece } from '../../types/Piece';
import { IValidPieceMove } from '../../types/ValidPieceMove';

export function isValidTowerMove({piece, from, to, board}: IValidPieceMove): boolean {

  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;
  const targetCell: IPiece | null = board[toRow][toCol];

  const isDamageToAllies = targetCell !== null && targetCell.color !== piece.color //проверка на не пустую клетку и проверка на несоюзную фигуру

  const isValidMove = (
    (fromCol !== toCol) ||
    (fromRow !== toRow)
  );

  const isPathEmpty = (): boolean => {
    if (fromCol === toCol) {
      // Движение по вертикали
      const step = fromRow < toRow ? 1 : -1;
      for (let row = fromRow + step; row !== toRow; row += step) {
        if (board[row][fromCol] !== null) {
          return false;
        }
      }
    } else if (fromRow === toRow) {
      // Движение по горизонтали
      const step = fromCol < toCol ? 1 : -1;
      for (let col = fromCol + step; col !== toCol; col += step) {
        if (board[fromRow][col] !== null) {
          return false;
        }
      }
    }
    return true;
  };

  const isTargetValid = targetCell === null || isDamageToAllies;

  return isValidMove && isTargetValid && isPathEmpty();
}
