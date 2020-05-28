import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { AvrilComponent } from "./pages/avril/avril.component";
import { MartinComponent } from "./pages/martin/martin.component";

const routes: Routes = [
  { path: "home", component: IndexComponent },
  { path: "martin", component: MartinComponent },
  { path: "avril", component: AvrilComponent },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
