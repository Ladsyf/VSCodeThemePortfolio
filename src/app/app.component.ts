import { Component, OnInit } from '@angular/core';
import { PageService } from './pages/page.service';
import { LocalPageService } from './pages/local-page.service';
import { IBaseTab } from './core/explorer/ifile-tree-tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private _pageService: PageService, private _localPage: LocalPageService) { }

  ngOnInit(): void {
    const history = this._localPage.getHistory();
    if(history)
      {
        this._pageService.setInitialHistory(history);
      }
  }
}
