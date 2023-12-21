import { Component, OnInit } from "@angular/core";
import { Sidebar } from "../layout/sidebar/sidebar.component";
import { NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  standalone: true,
  imports: [Sidebar, NgForOf, RouterLink],
})
export class MainComponent implements OnInit {
  categories: any[] = [
    {
      title: "Мобильная связь",
      icon: "../../../../assets/images/merchants/mobile.svg",
    },
    {
      title: "Интернет",
      icon: "../../../../assets/images/merchants/internet.svg",
    },
    {
      title: "ТВ и Связь",
      icon: "../../../../assets/images/merchants/tv.svg",
    },
    {
      title: "Комунальные услуги",
      icon: "../../../../assets/images/merchants/homePay.svg",
    },
    {
      title: "Благотворительность",
      icon: "../../../../assets/images/merchants/charity.svg",
    },
    {
      title: "Интернет-магазины",
      icon: "../../../../assets/images/merchants/imarket.svg",
    },
    {
      title: "Обучение",
      icon: "../../../../assets/images/merchants/education.svg",
    },
    {
      title: "Онлайн сервисы",
      icon: "../../../../assets/images/merchants/service.svg",
    },
    {
      title: "Международная моб. связь",
      icon: "../../../../assets/images/merchants/inter.svg",
    },
    {
      title: "Хостинг провайдеры",
      icon: "../../../../assets/images/merchants/provider.svg",
    },
    {
      title: "Погашение кредита",
      icon: "../../../../assets/images/merchants/credit.svg",
    },
    {
      title: "Газ",
      icon: "../../../../assets/images/merchants/gas.svg",
    },
    {
      title: "Электроэнергия",
      icon: "../../../../assets/images/merchants/electricity.svg",
    },
    {
      title: "Страхование",
      icon: "../../../../assets/images/merchants/safetly.svg",
    },
    {
      title: "Фин услуги",
      icon: "../../../../assets/images/merchants/dollar.svg",
    },
    {
      title: "Такси",
      icon: "../../../../assets/images/merchants/taxi.svg",
    },
    {
      title: "Игры и социальные сети",
      icon: "../../../../assets/images/merchants/game.svg",
    },
    {
      title: "My Gov.uz",
      icon: "../../../../assets/images/merchants/bank.svg",
    },
    {
      title: "Телефония",
      icon: "../../../../assets/images/merchants/phone.svg",
    },
    {
      title: "Другое",
      icon: "../../../../assets/images/merchants/other.svg",
    },
    {
      title: "Медицина",
      icon: "../../../../assets/images/merchants/medicine.svg",
    },
    {
      title: "Отели и туризм",
      icon: "../../../../assets/images/merchants/airplane.svg",
    },
  ];
  ngOnInit() {}
}
