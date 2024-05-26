import { createReducer, on } from '@ngrx/store';
import { addHistory, undoHistory, redoHistory, setInitialHistory } from './page.actions';
import { IFileTreeTab } from '../core/explorer/ifile-tree-tab';
import { compareObjects } from '../../globalHelper';
import { IHistoryState, initialState } from './page.variables';

const MAX_HISTORY_LENGTH = 50;

export const pageReducer = createReducer(
  initialState,
  on(addHistory, (state, { page }) => createNewHistory(state, page)),
  on(undoHistory, (state) => setCurrentHistoryBeforeCurrent(state)),
  on(redoHistory, (state) => setCurrentHistoryAfterCurrent(state)),
  on(setInitialHistory, (_, { state }) => state)
);

function createNewHistory(state: IHistoryState, present: IFileTreeTab): IHistoryState
{
  const nothingChanged = compareObjects(state.present, present);
  if (nothingChanged) return state
  const past = getNewPastHistory(state);
  const future: IFileTreeTab[] = [];
  return { past, present, future };
}

function getNewPastHistory(state: IHistoryState)
{
  let past = [...state.past, state.present];
  if (state.past.length > MAX_HISTORY_LENGTH)
    past = past.slice(1);

  return past;
}

function setCurrentHistoryBeforeCurrent(state: IHistoryState): IHistoryState
{
  const pastLength = state.past.length;
  const present = state.past[pastLength - 1];
  const past = state.past.slice(0, -1);

  const future = [state.present, ...state.future]

  return { past, present, future }
}

function setCurrentHistoryAfterCurrent(state: IHistoryState)
{
  const present = state.future[0];
  const future = state.future.slice(1);

  const past = [...state.past, state.present]

  return { past, present, future }
}
