import { Component } from "@angular/core";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    RouterModule,
    RouterLink,
  ],
})
export class AppComponent {
  title = "front-rms";
}
