import { IValidPieceMove } from '../../types/ValidPieceMove'
import { IPiece } from '../../types/Piece';
export function isValidBishopMove({ piece, from, to, board }: IValidPieceMove): boolean {
  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;
  const targetCell: IPiece | null = board[toRow][toCol];

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

  const isDamageToAllies = targetCell !== null && piece.color !== targetCell.color;
  const isTargetValid = targetCell === null || !isDamageToAllies;

  return isValidMove && isPathEmpty() && isTargetValid;
}
