import {Component} from "@angular/core";

@Component({
  /* moduleId: module.id, */
  selector: 'left-menu',
  templateUrl: './left-menu-template.html'
})

export class LeftMenuTemplateComponent {
  constructor() {}
  openWin(url : string) {
    let popup = `width=${window.innerWidth},height=${window.outerHeight - 50}`;
    window.open(url, "popup", popup);
  }
}
