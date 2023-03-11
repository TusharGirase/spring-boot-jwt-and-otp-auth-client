import { Component, OnInit, ElementRef } from '@angular/core';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { AdminLayoutRoutes } from 'src/app/layouts/admin-layout/admin-layout.routing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router,private authService: AuthService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = AdminLayoutRoutes.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].data.path === titlee){
            return this.listTitles[item].data.title;
        }
    }
    return 'Dashboard';
  }

  logout() {
    this.authService.logout();
  }

}
