import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PocComponent } from "./poc/poc.component";

const routes: Routes = [
    {
        path: 'poc',
        component: PocComponent
    },
    {
        path:'',
        component: PocComponent
    },
    {
        path:'**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}