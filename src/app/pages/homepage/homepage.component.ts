import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageService } from '../page.service';
import { LocalPageService } from '../local-page.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css', '../pagesCommon.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent
{

  constructor(private _pageService: PageService, private _localPageService: LocalPageService)
  {
  }

  public openProjectsFile()
  {
    const projectFile = {
      id: 3,
      isSelected: false,
      isOpened: false,
      name: "projects.html",
      iconProps: {
        iconName: "html",
        height: 7,
        width: 10
      },
      page: "projects"
    }

    const addToTabs = !this._localPageService.getHistory().present.tabs?.some(x => x.id === projectFile.id);

    this._pageService.selectExplorerFile(projectFile, addToTabs);
  }
}
