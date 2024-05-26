import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { IFileTab } from '../ifile-tree-tab';
import { PageService } from '../../../pages/page.service';

interface ITabSelected {
  "selected": boolean
}

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})

export class FileComponent implements AfterViewInit {
  @Input() file!: IFileTab;
  @Input() indent!: number;
  @ViewChild("tab") tabRef!: ElementRef;

  constructor(private _pageService: PageService) {}

  ngAfterViewInit(): void {
    this.setTabIndention();
  }

  public get tabSelected(): ITabSelected {
    return { "selected": this.file.isSelected };
  }

  public onClick()
  {
    this._pageService.selectExplorerFile(this.file, !this.file.isOpened);
  }

  private setTabIndention() {
    this.tabRef.nativeElement.style.paddingLeft = `${this.indent}rem`;
  }
}
