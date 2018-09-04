import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router : Router) {}

    canActivate() {
        if (localStorage.getItem('isLoggedIn')) {
            return true;
        }

        this
            .router
            .navigate(['user-login']);
        return false;
    }
}
