import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';

@NgModule({
  declarations: [
    IconComponent,
    PageContentComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    IconComponent,
    PageContentComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ]
})
export class SharedModule { }
