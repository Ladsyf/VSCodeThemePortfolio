import { HelpersService } from './../../helpers.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { IFileTreeTab } from './ifile-tree-tab';
import { PageService } from '../../pages/page.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.css'
})
export class ExplorerComponent implements AfterViewInit, OnInit {
  @ViewChild("resizableNav") resizableNav!: ElementRef

  public explorerTitle = "Almar's Portfolio"

  public menu!: IFileTreeTab;

  constructor(private _helper: HelpersService, private _pageService: PageService, private store: Store) { }

  ngOnInit(): void {
    this._pageService.getHistorySubscription((state) => this.menu = state.present);
  }

  ngAfterViewInit(): void {
    const existingLocalExplorerWidth = this._helper.getLocalExporerWidth();
    if (existingLocalExplorerWidth)
      this.setEndWidth(existingLocalExplorerWidth);
  }

  setEndWidth(width: string) {
    this.resizableNav.nativeElement.style.width = width;
  }

  onResize(event: ResizeEvent) {
    const width = `${event.rectangle.width}px`
    this.setEndWidth(width)
    this._helper.setLocalExplorerWidth(width);
  }
}
