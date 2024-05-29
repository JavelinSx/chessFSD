
import { IPiece } from '../../types/Piece';
import { IValidPieceMove } from '../../types/ValidPieceMove';

export function isValidKingMove({ piece, from, to, board }: IValidPieceMove): boolean {

  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;
  const targetCell: IPiece | null = board[toRow][toCol];

  // Проверка на допустимость хода (движение на одну клетку в любом направлении)
  const isValidMove = (
    Math.abs(fromRow - toRow) <= 1 &&
    Math.abs(fromCol - toCol) <= 1
  );

  // Проверка на попадание по своим фигурам
  const isTargetValid = targetCell === null || targetCell.color !== piece.color;

  return isValidMove && isTargetValid;
}
