import { Injectable } from '@angular/core';
import { IHistoryState } from '../store/page.variables';

@Injectable({
  providedIn: 'root'
})
export class LocalPageService {

  constructor() { }

  public setHistory(state: IHistoryState)
  {
    const stateString = JSON.stringify(state);
    localStorage.setItem("history", stateString);
  }

  public getHistory(): IHistoryState
  {
    const stateString = localStorage.getItem("history");
    return stateString ? JSON.parse(stateString) : null;
  }
}
