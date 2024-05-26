import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IIconProps } from '../../../icons';
import { IFileFolderTab } from '../ifile-tree-tab';
import { PageService } from '../../../pages/page.service';

interface ITabSelectedOrOpened {
  "selected": boolean,
  "opened": boolean
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})

export class AccordionComponent implements AfterViewInit {
  @Input() folder!: IFileFolderTab;
  @Input() indent!: number;
  @ViewChild("tab") tabRef!: ElementRef;

  constructor(private _pageService: PageService) {}
  public iconProps: IIconProps = {
    iconName: "chevron_right",
    height: 14,
    width: 14,
  }

  ngAfterViewInit(): void {
    this.setTabIndention();
  }

  public get tabSelected(): ITabSelectedOrOpened {
    return { "selected": this.folder.isSelected, "opened": this.folder.isOpened };
  }

  public onClick() {
    const newFolderState = {
      ...this.folder,
      isSelected: true,
      isOpened: !this.folder.isOpened
    }
    this._pageService.selectExplorerFolder(newFolderState);
  }

  private setTabIndention() {
    this.tabRef.nativeElement.style.paddingLeft = `${this.indent}rem`;
  }
}
