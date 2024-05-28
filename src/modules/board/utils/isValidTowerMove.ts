import { CellPosition } from '../helpers/moveValidation';

export function isValidTowerMove(
  piece: string,
  from: CellPosition,
  to: CellPosition,
  board: (string | null)[][]
): boolean {

  const isWhite = piece.toUpperCase() === piece;
  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;
  const targetPiece: string | null = board[toRow][toCol];

  const isDamageToAllies = targetPiece !== null && isWhite !== (targetPiece.toUpperCase() === targetPiece) //проверка на не пустую клетку и проверка на несоюзную фигуру

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

  const isTargetValid = targetPiece === null || isDamageToAllies;

  return isValidMove && isTargetValid && isPathEmpty();
}
