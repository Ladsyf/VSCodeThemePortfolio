import { createAction, props } from '@ngrx/store';
import { IFileTreeTab } from '../core/explorer/ifile-tree-tab';
import { IHistoryState } from './page.variables';

export const addHistory = createAction('[Page Component] AddHistory', props<{ page: IFileTreeTab }>());
export const undoHistory = createAction("[Page Component] UndoHistory");
export const redoHistory = createAction('[Page Component] RedoHistory');
export const setInitialHistory = createAction('[Page Component] SetInitialPageHistory', props<{ state: IHistoryState }>());
