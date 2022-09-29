import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const SUBROUTES: Routes = [
  {
    path: '',
    component: ShellComponent,
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(SUBROUTES)],
  exports: [RouterModule],
  providers: [],
})
export class ShellRoutingModule {}
