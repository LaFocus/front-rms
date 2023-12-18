import { Component } from "@angular/core";
import { StaffModal } from "./staff-modal/staff-modal.component";
import { NgIf } from "@angular/common";

@Component({
  selector: "./app-points",
  templateUrl: "./staff.component.html",
  styleUrls: ["./staff.component.scss"],
  standalone: true,
  imports: [StaffModal, NgIf],
})
export class StaffComponent {
  isModalActive: boolean = false;
}
