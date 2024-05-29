import { ICellPosition } from "./CellPosition";
import { IPiece } from "./Piece";
export interface IPiecePosition {
  piece: IPiece;
  position: ICellPosition;
}
