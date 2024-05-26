import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css'
})
export class SecondaryButtonComponent {
  @Input() caption!: string;
  @Input() iconName!: string;
  @Input() iconWidth: number = 24;
  @Input() iconHeight!: number;
}
