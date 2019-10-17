import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home-page/home.component";
import { LoginComponent } from "./login/login-page/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./_guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: PageNotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
