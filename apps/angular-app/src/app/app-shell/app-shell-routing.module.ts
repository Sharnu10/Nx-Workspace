import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgGridComponent } from "../ag-grid/ag-grid.component";
import { PocComponent } from "../poc/poc.component";
import { ShellComponent } from "./shell/shell.component";

const SUBROUTES: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'poc',
        component: PocComponent,
      },
      {
        path: 'agGrid',
        component: AgGridComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(SUBROUTES)],
    exports: [RouterModule],
    providers: []
})
export class ShellRoutingModule {}