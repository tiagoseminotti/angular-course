import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isAuthenticated()){
            this.router.navigate(['/signin']);
        }

        return this.authService.isAuthenticated();
    }

    canLoad(){
        return this.authService.isAuthenticated();
    }
}