import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppMainLayout } from "./layouts/main-layout/main-layout.component";
import { AuthLayout } from "./layouts/auth-layout/auth-layout.component";

// use here lazyLoad import okey (DANIYAR)

const routes: Routes = [
  {
    path: '',
    component: AppMainLayout,
    children: [
      // { path: 'payments', component: useComponent }
    ]
  },
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      // { path: '', component: useComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
