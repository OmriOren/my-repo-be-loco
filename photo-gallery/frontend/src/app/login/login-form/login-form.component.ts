import { Component, OnInit, NgModule } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  NgForm
} from "@angular/forms";

import { MatDialog } from "@angular/material/dialog";

import { AuthenticationService } from "../../_services";
import { IncorrectCredentialsAlertComponent } from "../../incorrect-credentials-alert/incorrect-credentials-alert.component";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  requiredFeildAlert: string = "This field is required";
  hidePassword = true;
  returnUrl: string;
  error = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog
  ) {
    // To initialize FormGroup
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    const [username, password] = Object.values(form);
    this.authenticationService.login(username, password).subscribe(
      data => {
        this.router.navigate(["/"]);
      },
      error => {
        this.error = error;
        this.loading = false;
        this.openDialog();
      }
    );
  }

  reset() {
    this.loginForm.get("username").setValue("");
    this.loginForm.get("password").setValue("");
  }

  private openDialog(): void {
    this.dialog.open(IncorrectCredentialsAlertComponent, {
      width: "250px",
      data: { error: this.error }
    });
    console.log("error: " + this.error);
  }
}
