import {
  Component,
  EventEmitter,
  Output,
} from "@angular/core";
import { FormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";
import { ProfileInfo } from "../profile-info/profile-info.component";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  standalone: true,
  imports: [ProfileInfo, NgIf, FormsModule],
})
export class Sidebar {
  isSwitchOn: boolean = false;
  isDarkMode: boolean = true;
  isWindowSmall: boolean = window.innerWidth <= 1300;

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  modeToggle() {
    if (this.isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    this.isDarkMode = !this.isDarkMode;
  }

  closeModal() {
    this.buttonClick.emit();
  }

  ngOnInit() {
    const mode = localStorage.getItem("theme");

    if (!mode) {
      localStorage.setItem("theme", "light");
      this.isDarkMode = true;
      document.documentElement.classList.remove("dark");
    } else {
      if (mode === "light") {
        document.documentElement.classList.remove("dark");
        this.isDarkMode = false;
      } else {
        document.documentElement.classList.add("dark");
        this.isDarkMode = true;
      }
    }
  }
}
