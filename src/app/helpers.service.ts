import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService
{

  constructor() { }

  public setLocalExplorerWidth(width: string)
  {
    localStorage.setItem("explorerWidth", width);
  }

  public getLocalExporerWidth()
  {
    return localStorage.getItem("explorerWidth");
  }

  public openLink(url: string): void
  {
    window.open(url, "_blank")
  }
}
