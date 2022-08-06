import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { PocComponent } from "./poc/poc.component";

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./app-shell/app-shell.module').then((m) => m.AppShellModule),
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }