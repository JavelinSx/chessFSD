import { CellPosition } from '../helpers/moveValidation';

export function isValidQueenMove(
  piece: string,
  from: CellPosition,
  to: CellPosition,
  board: (string | null)[][]
): boolean {
  const isWhite = piece.toUpperCase() === piece;
  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;
  const targetPiece: string | null = board[toRow][toCol];

  const isDamageToAllies = targetPiece !== null && isWhite === (targetPiece.toUpperCase() === targetPiece);

  const isValidMove = (
    (fromCol === toCol || fromRow === toRow) || // Движение по прямой линии (как ладья)
    (Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol)) // Движение по диагонали (как слон)
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
    } else if (Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol)) {
      // Движение по диагонали
      const rowStep = fromRow < toRow ? 1 : -1;
      const colStep = fromCol < toCol ? 1 : -1;
      let row = fromRow + rowStep;
      let col = fromCol + colStep;

      while (row !== toRow && col !== toCol) {
        if (board[row][col] !== null) {
          return false;
        }
        row += rowStep;
        col += colStep;
      }
    }
    return true;
  };

  const isTargetValid = targetPiece === null || !isDamageToAllies;

  return isValidMove && isPathEmpty() && isTargetValid;
}
