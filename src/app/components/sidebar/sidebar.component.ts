import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLayoutRoutes } from 'src/app/layouts/admin-layout/admin-layout.routing';
import { Role } from 'src/app/_models/role';
import { AuthService } from 'src/app/_services/auth.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  rolesAllowed: Role[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;



  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const roles = this.authService.userValue.roles
    this.menuItems = AdminLayoutRoutes.filter(route => {
      for (let index = 0; index < route.data.roles.length; index++) {
        const allowedRole = route.data.roles[index];
        if (roles.includes(allowedRole)) {
          return true;
        }
      }
      return false;
    });
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

  }
}
