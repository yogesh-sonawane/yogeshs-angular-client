import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  constructor() {}
  _defaults = {
    success: 'green',
    warning: '#736518',
    info: 'rgb(8, 101, 193)',
    error: 'red',
    default: 'green'
  };
  showMessage(id : string, msg : string, type : any) {
    var color = this._defaults[type] || this._defaults['default'];
    var element = document.getElementById(id);
    if (!element) 
      return;
    element.innerHTML = '';
    element.style['color'] = color;
    element.innerHTML = msg;
  }
  log(msg : string) {
    console.log(msg);
  }
  clear(id : string) {
    var element = document.getElementById(id);
    if (!element) 
      return;
    element.innerHTML = '';
  }
}