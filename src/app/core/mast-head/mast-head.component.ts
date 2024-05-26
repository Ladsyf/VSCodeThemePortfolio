import { Component } from '@angular/core';
import { PageService } from '../../pages/page.service';
import { IHistory } from '../../store/page.variables';

@Component({
  selector: 'app-mast-head',
  templateUrl: './mast-head.component.html',
  styleUrl: './mast-head.component.css'
})
export class MastHeadComponent
{
  public history$ = this._pageService.getHistory();

  constructor(private _pageService: PageService)
  { }

  public getUndoRedoDisableClass(history: IHistory[])
  {
    const shouldDisableClass = this.getShouldDisableUndoRedoButton(history)
    return {"disabled-undo-redo-icon": shouldDisableClass};
  }

  public getShouldDisableUndoRedoButton(history: IHistory[])
  {
    return history.length <= 0;
  }

  public undo()
  {
    this._pageService.undoHistory();
  }

  public redo()
  {
    this._pageService.redoHistory();
  }
}
