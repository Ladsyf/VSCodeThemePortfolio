import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MastHeadComponent } from './mast-head/mast-head.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { SideButtonComponent } from './side-bar/side-button/side-button.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { ResizableModule } from 'angular-resizable-element';
import { FileComponent } from './explorer/file/file.component';
import { AccordionComponent } from './explorer/accordion/accordion.component';
import { TabPaneComponent } from './tab-pane/tab-pane.component';
import { TabComponent } from './tab-pane/tab/tab.component';
import { LetDirective } from '@ngrx/component';

@NgModule({
  declarations: [
    SideBarComponent,
    MastHeadComponent,
    LayoutComponent,
    SideButtonComponent,
    ExplorerComponent,
    FileComponent,
    AccordionComponent,
    TabPaneComponent,
    TabComponent,
  ],
  imports: [
    SharedModule,
    ResizableModule,
    LetDirective
  ],
  exports: [
    SideBarComponent,
    MastHeadComponent,
    LayoutComponent
  ]
})
export class CoreModule { }
