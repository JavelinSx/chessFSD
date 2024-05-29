import { ICellPosition } from "./CellPosition"
import {IPiece} from './Piece'
export interface IValidPieceMove{
  piece: IPiece,
  from: ICellPosition,
  to: ICellPosition,
  board: (IPiece | null)[][]
}
