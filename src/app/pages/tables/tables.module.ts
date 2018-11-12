import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {UserManagementService} from "../../@core/data/user-management.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor, JwtInterceptor} from "../../@core/data/interceptors";

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
    UserManagementService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class TablesModule { }
