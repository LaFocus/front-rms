import { Component, OnInit } from "@angular/core";
import { DepositMainComponent } from "./deposit-main/deposit-main.component"
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";


@Component({
  selector: "app-main-layout",
  templateUrl: "./deposit.component.html",
  styleUrls: [
    './deposit.component.scss'
  ],
  standalone: true,
  imports: [
    DepositMainComponent,
    RouterOutlet,
    RouterModule,
    RouterLink,
  ],
})
export class DepositComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
