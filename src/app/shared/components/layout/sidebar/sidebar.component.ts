import { Component } from "@angular/core";
import { ProfileInfo } from "../profile-info/profile-info.component";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  standalone: true,
  imports: [
    ProfileInfo
  ],
})
export class Sidebar {
  isSwitchOn: boolean = false;

  onSwitchChange(checked: boolean) {
    console.log("Switch state changed:", checked);
  }
}
