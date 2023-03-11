import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public copy: string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(`${environment.BACKEND_SERVER}/protected/employee/1`).subscribe(resp=>{
      console.log(resp)
    });
  }
}
