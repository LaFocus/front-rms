import { Component } from "@angular/core";
import { PointsModal } from "./points-modal/points-modal.component";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-points",
  templateUrl: "./points.component.html",
  styleUrls: ["./points.component.scss"],
  standalone: true,
  imports: [PointsModal, NgIf],
})
export class PointsComponent {
  isModalActive: boolean = false;
}
