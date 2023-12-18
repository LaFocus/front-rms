import { Component, EventEmitter, Output } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
  selector: "./staff-modal",
  templateUrl: "./staff-modal.component.html",
  styleUrls: ["./staff-modal.component.scss"],
  standalone: true,
  imports: [NgIf],
})
export class StaffModal {
  isModalActive: boolean = true;
  isNextActive: boolean = false;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  closeModal() {
    this.buttonClick.emit();
  }
}
