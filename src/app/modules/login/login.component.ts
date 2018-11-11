import {Component, NgModule, OnInit} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NbAuthService, NbAuthSocialLink} from '@nebular/auth';
import {AppComponent} from '../../app.component';
import {NbAlertModule} from '@nebular/theme';
import {AuthenticationService} from "../../@core/data/authentication.service";
import {first} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [ NbAlertModule ],
  bootstrap: [AppComponent ],
})
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;
  returnUrl: string;
  loading: boolean;
  error: string;
  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.loginForm = this.formBuilder.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.authenticationService.login(this.f.identifier.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}


