import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { FileDownloadService } from 'src/app/_services/file-download.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  firstName: string

  constructor(private authService: AuthService, private fileDownloadService: FileDownloadService) { }

  ngOnInit() {
    this.firstName = this.authService.userValue.firstName
  }

  downloadProfile() {
    this.fileDownloadService.downloadFileFromURL(`${environment.BACKEND_SERVER}/auth/empoyees-report`);
  }

}
