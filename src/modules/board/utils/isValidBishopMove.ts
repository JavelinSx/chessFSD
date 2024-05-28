import { CellPosition } from '../helpers/moveValidation';

export function isValidBishopMove(
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
    Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol) // Слон может двигаться только по диагоналям
  );

  const isPathEmpty = (): boolean => {
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
    return true;
  };

  const isTargetValid = targetPiece === null || !isDamageToAllies;

  return isValidMove && isPathEmpty() && isTargetValid;
}
