import { Component } from '@angular/core';
import { MybackgroundComponent } from '../../pages/mybackground/mybackground.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  test = {
    isSelected: false,
    isOpened: false,
    name: "mybackground.html",
    iconProps: {
      iconName: "html",
      height: 7,
      width: 10
    },
    page: MybackgroundComponent
  }
}
