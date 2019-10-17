import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { User } from "../../_models";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  @Input() currentUser: User;
  @Output() logoutEvent = new EventEmitter<any>();
  @Output() goHomeEvent = new EventEmitter<any>();
  @Output() toggleSidenavEvent = new EventEmitter<any>();
  @Output() closeSidenavEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  logout() {
    this.logoutEvent.emit();
  }

  toggleSidenav() {
    this.toggleSidenavEvent.emit();
  }

  closeSidenav() {
    this.closeSidenavEvent.emit();
  }
}
