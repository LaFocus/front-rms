import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { Sidebar } from "src/app/shared/components/layout/sidebar/sidebar.component";
import { NgForOf } from "@angular/common";
import { ProfileInfo } from "../../shared/components/layout/profile-info/profile-info.component";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"],
  standalone: true,
  imports: [
    Sidebar,
    ProfileInfo,
    NgForOf,
    RouterOutlet,
    RouterModule,
    RouterLink,
  ],
})
export class AppMainLayout implements OnInit {
  constructor() {}
  headerNav: any[] = [
    {
      title: "Оплаты",
      path: "/main",
      icon: "../../../assets/images/Wallet.svg",
    },
    {
      title: "Депозит",
      path: "/deposit",
      icon: "../../../assets/images/Deposit.svg",
    },
    {
      title: "Вознаграждения",
      path: "/bonuses",
      icon: "../../../assets/images/Star.png",
    },
    {
      title: "Торговые точки",
      path: "/points",
      icon: "../../../assets/images/Home.svg",
    },
    {
      title: "Сотрудники",
      path: "/staff",
      icon: "../../../assets/images/Staff.svg",
    },
  ];
  ngOnInit() {}
}
