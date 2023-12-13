import { Component, OnInit } from "@angular/core";
import { Sidebar } from "src/app/shared/components/layout/sidebar/sidebar.component";
import { NgForOf } from "@angular/common";


@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: [
    './main-layout.component.scss'
  ],
  standalone: true,
  imports: [
    Sidebar,
    NgForOf
  ]
})
export class AppMainLayout implements OnInit {
  constructor() {}
  headerNav: any[] = [
    {
      title: 'Оплаты',
      icon: '../../../assets/images/Wallet.svg'
    },
    {
      title: 'Депозит',
      icon: '../../../assets/images/Deposit.svg'
    },
    {
      title: 'Вознаграждения',
      icon: '../../../assets/images/Star.svg'
    },
    {
      title: 'Торговые точки',
      icon: '../../../assets/images/Home.svg'
    },
    {
      title: 'Сотрудники',
      icon: '../../../assets/images/Staff.svg'
    },
  ]
  ngOnInit() {}
}
