import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyCoreModule } from "./formly/Formly-core.module";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, FormlyCoreModule]
})
export class FormCoreModule { }