import { CellPosition } from '../helpers/moveValidation';

export function isValidKingMove(
  piece: string,
  from: CellPosition,
  to: CellPosition,
  board: (string | null)[][]
): boolean {
  const isWhite = piece.toUpperCase() === piece;
  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;
  const targetPiece: string | null = board[toRow][toCol];

  // Проверка на допустимость хода (движение на одну клетку в любом направлении)
  const isValidMove = (
    Math.abs(fromRow - toRow) <= 1 &&
    Math.abs(fromCol - toCol) <= 1
  );

  // Проверка на попадание по своим фигурам
  const isTargetValid = targetPiece === null || isWhite !== (targetPiece.toUpperCase() === targetPiece);

  return isValidMove && isTargetValid;
}
