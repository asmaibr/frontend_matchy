import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/backoffice/login",
    pathMatch: "full",
  },
  {
    path: "backoffice",
    loadChildren: () =>
      import("./backoffice/backoffice.module").then((m) => m.BackofficeModule),
  },
  {
    path: "frontoffice",
    loadChildren: () =>
      import("./frontoffice/frontoffice.module").then(
        (m) => m.FrontofficeModule,
      ),
  },
  {
    path: "content-list",
    redirectTo: "/frontoffice/content-list",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "/backoffice/login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
