import { Component, OnInit, OnDestroy, inject } from "@angular/core";
import { DepositMainComponent } from "./deposit-main/deposit-main.component";
import { DepositHistory } from "./deposit-history/deposit-history.component";
import {
  RouterLink,
  RouterModule,
  RouterOutlet,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { map } from "rxjs/operators";
import { Subscription } from "rxjs";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-main-layout",
  templateUrl: "./deposit.component.html",
  styleUrls: ["./deposit.component.scss"],
  standalone: true,
  imports: [
    DepositMainComponent,
    RouterOutlet,
    RouterModule,
    RouterLink,
    DepositHistory,
    NgIf,
  ],
})
export class DepositComponent implements OnInit, OnDestroy {
  route = inject(ActivatedRoute)
  router = inject(Router);

  activeTab$ = this.route.queryParams.pipe(map((item) => item["overview"]));
  activeTab: string | undefined;
  private subscription!: Subscription;

  ngOnInit() {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    
    this.activeTab = snapshot.queryParams["overview"] || "main";
    this.subscription = this.route.queryParams.subscribe((params) => {
      this.activeTab = params["overview"];
    });
    this.router.navigate([`/deposit`], {
      queryParams: { overview: "main" },
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}