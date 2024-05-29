import { IBoard } from '../../../types/board';
export const initialBoardSetup = (): IBoard => [
  [
    { color: 'black', type: 'R' }, { color: 'black', type: 'N' }, { color: 'black', type: 'B' }, { color: 'black', type: 'Q' },
    { color: 'black', type: 'K' }, { color: 'black', type: 'B' }, { color: 'black', type: 'N' }, { color: 'black', type: 'R' }
  ],
  [
    { color: 'black', type: 'P' }, { color: 'black', type: 'P' }, { color: 'black', type: 'P' }, { color: 'black', type: 'P' },
    { color: 'black', type: 'P' }, { color: 'black', type: 'P' }, { color: 'black', type: 'P' }, { color: 'black', type: 'P' }
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    { color: 'white', type: 'P' }, { color: 'white', type: 'P' }, { color: 'white', type: 'P' }, { color: 'white', type: 'P' },
    { color: 'white', type: 'P' }, { color: 'white', type: 'P' }, { color: 'white', type: 'P' }, { color: 'white', type: 'P' }
  ],
  [
    { color: 'white', type: 'R' }, { color: 'white', type: 'N' }, { color: 'white', type: 'B' }, { color: 'white', type: 'Q' },
    { color: 'white', type: 'K' }, { color: 'white', type: 'B' }, { color: 'white', type: 'N' }, { color: 'white', type: 'R' }
  ]
];
