import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { PageService } from '../../pages/page.service';
import { IHistoryState } from '../../store/page.variables';

@Component({
  selector: 'app-tab-pane',
  templateUrl: './tab-pane.component.html',
  styleUrl: './tab-pane.component.css'
})
export class TabPaneComponent {
  public history$: Observable<IHistoryState> = this._pageService.getHistory();

  constructor(private _pageService: PageService) {}
}
