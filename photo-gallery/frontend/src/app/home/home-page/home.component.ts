import { Component, OnInit } from "@angular/core";
// import { first } from "rxjs/operators";

import { User } from "../../_models";
import { UserService } from "../../_services";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  loading = false;
  currentUser: User;
  // users: User[] = [];
  photos = [
    "bmw outside",
    "bmw",
    "bus",
    "dachau bus",
    "english gardens",
    "hard rock cafe",
    "hotel",
    "octoberfest park",
    "octoberfest ride",
    "octoberfest tent",
    "olympic park tower all",
    "olympic park tower",
    "plane",
    "restaurant shop",
    "science museum",
    "starbucks",
    "train home",
    "train station",
    "train",
    "wine tent"
  ];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.loading = true;
    // this.loadAllUsers();
  }

  // private loadAllUsers() {
  //   this.userService
  //     .getAll()
  //     .pipe(first())
  //     .subscribe(users => {
  //       this.loading = false;
  //       this.users = users;
  //     });
  // }
}
