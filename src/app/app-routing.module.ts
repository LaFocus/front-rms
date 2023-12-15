import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppMainLayout } from "./layouts/main-layout/main-layout.component";
import { AuthLayout } from "./layouts/auth-layout/auth-layout.component";

// use here lazyLoad import okey (DANIYAR)

const routes: Routes = [
  {
    path: "",
    component: AppMainLayout,
    children: [
      {
        path: "main",
        loadComponent: () =>
          import("./shared/components/main/main.component").then(
            (m) => m.MainComponent
          ),
      },
      {
        path: "deposit",
        loadComponent: () =>
          import("./shared/components/deposit/deposit.component").then(
            (m) => m.DepositComponent
          ),
        children: [
          {
            path: 'deposit/history',
            loadComponent: () =>
              import("./shared/components/deposit/deposit-history/deposit-history.component").then(
                (m) => m.DepositHistory
              ),
          },
          {
            path: 'deposit/main',
            loadComponent: () =>
              import("./shared/components/deposit/deposit-main/deposit-main.component").then(
                (m) => m.DepositMainComponent
              ),
          },
        ],
      },
      {
        path: "bonuses",
        loadComponent: () =>
          import("./shared/components/bonuses/bonuses.component").then(
            (m) => m.BonusesComponent
          ),
      },
      {
        path: "points",
        loadComponent: () =>
          import("./shared/components/points/points.component").then(
            (m) => m.PointsComponent
          ),
      },
      {
        path: "staff",
        loadComponent: () =>
          import("./shared/components/staff/staff.component").then(
            (m) => m.StaffComponent
          ),
      },
    ],
  },
  {
    path: "auth",
    component: AuthLayout,
    children: [
      // { path: '', component: useComponent }
    ],
  },
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
