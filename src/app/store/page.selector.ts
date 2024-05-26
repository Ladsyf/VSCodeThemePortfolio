import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IHistoryState } from "./page.variables";

const feature = createFeatureSelector<IHistoryState>('historyFeature');

export const selectHistory = createSelector(
  feature,
  (state: IHistoryState) => state
);
