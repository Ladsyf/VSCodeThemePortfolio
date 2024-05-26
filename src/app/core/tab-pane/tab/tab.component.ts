import { Component, Input } from '@angular/core';
import { IFileTab } from '../../explorer/ifile-tree-tab';
import { IIconProps } from '../../../icons';
import { PageService } from '../../../pages/page.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  @Input() file!: IFileTab;

  constructor(private _pageService: PageService) {}

  public closeIcon: IIconProps = {
    iconName: "close",
    width: 16,
  }

  public get openedClass()
  {
    return { "isOpened": this.file.isOpened }
  }

  public openTab()
  {
    this._pageService.selectExplorerFile(this.file);
  }

  public closeTab()
  {
    this._pageService.closeTabFile(this.file);
  }
}
