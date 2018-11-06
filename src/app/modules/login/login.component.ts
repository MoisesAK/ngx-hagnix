import {Component, NgModule, OnInit} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {NbAuthService, NbAuthSocialLink} from '@nebular/auth';
import {AppComponent} from '../../app.component';
import {NbAlertModule} from '@nebular/theme';

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
  protected service: NbAuthService;
  protected options: {};
  protected cd: ChangeDetectorRef;
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  user: any;
  submitted: boolean;
  socialLinks: NbAuthSocialLink[];
  rememberMe: boolean;
  constructor() { }

  ngOnInit() {
  }

}


