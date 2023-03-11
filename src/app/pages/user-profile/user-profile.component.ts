import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  firstName: string

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.firstName = this.authService.userValue.firstName
  }

}
