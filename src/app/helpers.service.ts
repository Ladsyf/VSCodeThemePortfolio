import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  setLocalExplorerWidth(width: string) {
    localStorage.setItem("explorerWidth", width);
  }

  getLocalExporerWidth() {
    return localStorage.getItem("explorerWidth");
  }
}
