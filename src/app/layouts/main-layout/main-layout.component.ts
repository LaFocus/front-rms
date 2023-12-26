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
  isBurgerActive: boolean = false;
  isWindowSmall: boolean = window.innerWidth <= 1300;

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

  showSidebar() {
    this.isBurgerActive = !this.isBurgerActive;

    if (this.isBurgerActive) document.body.classList.add("stopSCroll");
    else document.body.classList.remove("stopSCroll");
  }

  changeSideBarPos(): any {
    if (this.isWindowSmall) {
      if (this.isBurgerActive) {
        return "translateX(0)";
      }else return "translateX(-100%)"
    }
  }

  ngOnInit() {
    window.addEventListener("click", () => {
      this.isBurgerActive = false;
      document.body.classList.remove("stopSCroll");
    });
  }
}
