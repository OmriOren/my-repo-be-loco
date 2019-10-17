import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.scss"]
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenavEvent = new EventEmitter<any>();

  sidenav_options = new Map([
    [
      "My Stuff",
      [
        { label: "My Gallery", icon: "photo_library", link: "gallery" },
        { label: "My Categories", icon: "category", link: "categories" },
        { label: "My Actions", icon: "list", link: "actions" },
        { label: "My Account", icon: "person", link: "account" }
      ]
    ],
    [
      "View",
      [
        { label: "Display Mode", icon: "view_module", link: "displaymode" },
        { label: "sort", icon: "reorder", link: "account" }
      ]
    ],
    [
      "Favorite Filters",
      [
        { label: "Family", icon: "star", link: "family" },
        { label: "Friends", icon: "star", link: "friends" },
        { label: "Munich", icon: "star", link: "munich" }
      ]
    ]
  ]);

  sidenav_options_keys = Array.from(this.sidenav_options.keys()).map(function(
    element,
    index
  ) {
    return { element: index };
  });

  constructor() {}

  ngOnInit() {}

  closeSidenav() {
    this.closeSidenavEvent.emit();
  }

  sortKeys = (a, b) => {
    return this.sidenav_options_keys[a] > this.sidenav_options_keys[b] ? -1 : 1;
  };
}
