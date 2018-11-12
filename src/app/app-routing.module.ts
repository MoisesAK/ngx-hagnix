import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {LoginComponent} from './modules/login/login.component';
import {AuthGuard} from './@core/guard/auth.guard';
import {IndexComponent} from "./pages/index/index.component";
import {LoginGuard} from "./@core/guard/login.guard";
import {GamePageComponent} from "./pages/game-page/game-page.component";


const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [AuthGuard] },
  {
    path: 'game',
    component: GamePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
    ],
  },
  { path: 'index',
    component: IndexComponent,
    /*children: [{
      path: '',
      component: IndexComponent
    }],*/
    pathMatch: 'full' },

  { path: '**', redirectTo: 'index' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
