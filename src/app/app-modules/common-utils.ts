import {Injectable} from '@angular/core';

@Injectable()
export class CommonUtils {
  getParameterByName(pName: string): string {
    var name = pName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
    var results = regex.exec(location.search);
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  logOut(): void {}
}
