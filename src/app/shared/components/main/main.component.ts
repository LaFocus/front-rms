import { Component, OnInit } from "@angular/core";
import { Sidebar } from "../layout/sidebar/sidebar.component";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main.component.html",
  styleUrls: [
    './main.component.scss'
  ],
  standalone: true,
  imports: [
    Sidebar
  ]
})
export class MainComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
