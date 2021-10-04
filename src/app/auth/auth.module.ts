import {NgModule} from '@angular/core';
import {LoginAuth} from './login/login.auth';
import { FormsModule } from '@angular/forms';
//import {RegisterAuth} from './register/register.auth';
import {AuthRouting} from './auth.routing';


@NgModule({
    imports: [AuthRouting,FormsModule],
    declarations: [
        LoginAuth,
        //RegisterAuth,
    ],
    providers: [],
    entryComponents: [
    ]
})
export class AuthModule {
}
