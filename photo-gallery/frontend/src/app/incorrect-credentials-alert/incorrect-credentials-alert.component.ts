import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-incorrect-credentials-alert",
  templateUrl: "./incorrect-credentials-alert.component.html",
  styleUrls: ["./incorrect-credentials-alert.component.scss"]
})
export class IncorrectCredentialsAlertComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit() {
  }
}
