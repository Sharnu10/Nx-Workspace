import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-org-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  isSideBarOpen = true;
  constructor() { }

  toggleSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
}
