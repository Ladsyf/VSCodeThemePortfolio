import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ISvgProps } from '../isvg-props';
import { IIconProps, icon } from '../../icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent implements OnInit, AfterViewInit {
  @Input() iconName?: string;
  @Input() iconWidth: number = 24;
  @Input() iconHeight?: number;
  @Input() svgProps!: ISvgProps;
  @Input() iconScale: number = 1;

  @ViewChild("svgIcon") svg!: SVGElement;

  ngOnInit(): void {
    if (!this.svgProps) {
      const iconProps: IIconProps = {
        iconName: this.iconName,
        width: this.iconWidth,
        height: this.iconHeight,
        color: "#C5C5C5"
      }

      this.svgProps = icon(iconProps);
    }
  }

  ngAfterViewInit(): void {

  }
}
