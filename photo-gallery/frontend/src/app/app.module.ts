import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { MaterialModule } from "./material.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { JwtInterceptor, ErrorInterceptor } from "./_helpers";

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

import { HomeComponent } from "./home/home-page/home.component";
import { LoginComponent } from "./login/login-page/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { LoginFormComponent } from "./login/login-form/login-form.component";
import { LoginLogoComponent } from "./login/login-logo/login-logo.component";
import { HomeLogoComponent } from "./home/home-logo/home-logo.component";
import { IncorrectCredentialsAlertComponent } from "./incorrect-credentials-alert/incorrect-credentials-alert.component";
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

// import { SidenavComponent } from "./navigation/sidenav/sidenav.component";
// import { HeaderComponent } from "./navigation/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginLogoComponent,
    HomeLogoComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    IncorrectCredentialsAlertComponent,
    ToolbarComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [IncorrectCredentialsAlertComponent]
})
export class AppModule {}
