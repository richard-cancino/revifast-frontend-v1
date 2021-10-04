import { RouterModule, Routes } from "@angular/router";
import {NgModule} from '@angular/core';
//import { AppComponent } from "./app.component";
import { LoginAuth } from "./login/login.auth";
//import { RegisterComponent } from "./register/register.component";

const routing: Routes =  [
    { 
        path: '',
        children: [
            {
                path: "login", 
                component: LoginAuth, 
            },
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule]
})
export class AuthRouting {}