import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "../../_services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AlertService } from 'src/app/_services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loading = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loading = false;

    this.f.username.setValue('azhwani')
    this.f.password.setValue('@zhwaniPass')
  }
  ngOnDestroy() {
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.loading = true;


    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.alertService.error(error.error)
          console.log(error)
          this.loading = false;
        }
      });

  }


}
