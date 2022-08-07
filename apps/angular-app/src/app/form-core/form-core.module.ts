import { NgModule } from "@angular/core";
import { FormlyCoreModule } from "./Formly-core.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [FormsModule, ReactiveFormsModule, FormlyCoreModule]
})
export class FormCoreModule { }