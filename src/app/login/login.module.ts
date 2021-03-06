import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    LoginRoutingModule,
    TranslateModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
