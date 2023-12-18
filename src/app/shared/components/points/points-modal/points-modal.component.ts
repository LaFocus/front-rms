import { Component, EventEmitter, Output } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
  selector: "./points-modal",
  templateUrl: "./points-modal.component.html",
  styleUrls: ["./points-modal.component.scss"],
  standalone: true,
  imports: [NgIf],
})
export class PointsModal {
  isModalActive: boolean = true;
  isNextActive: boolean = false;

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  closeModal() {
    this.buttonClick.emit();
  }
}
