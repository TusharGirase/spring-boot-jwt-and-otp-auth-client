import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authService.userValue;
        if (user) {
            // check if route is restricted by role
            const { roles } = route.data;
            if (roles) {
                for (let index = 0; index < roles.length; index++) {
                    const allowedRole = roles[index];
                    if (user.roles.includes(allowedRole)) {
                        return true;
                    }
                }
                // role not authorized so redirect to home page
                this.router.navigate(['/unauthorized']);
                return false;
            }

            // authorized so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}