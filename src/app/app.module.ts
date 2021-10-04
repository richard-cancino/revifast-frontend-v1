import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

//import { routing }        from './app.routing';

//import { AlertComponent } from './_components';
//import { JwtInterceptor, ErrorInterceptor } from './_helpers';
//import { HomeComponent } from './home';
import { AuthModule } from './auth/auth.module';
//import { RegisterComponent } from './register';

const AppRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: false});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
