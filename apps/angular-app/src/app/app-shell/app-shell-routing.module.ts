import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PocComponent } from "../poc/poc.component";
import { ShellComponent } from "./shell/shell.component";

const routes: Routes = [
    {
        path:'',
        component: ShellComponent
    },
    {
        path: 'poc',
        component: PocComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ShellRoutingModule {}