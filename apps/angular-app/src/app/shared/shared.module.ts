import { NgModule } from "@angular/core";
import { BaseFormlyComponent } from "../base-formly/base-formly.component";
import { FormCoreModule } from "../form-core/form-core.module";

@NgModule({
    imports: [FormCoreModule],
    exports: [BaseFormlyComponent],
    declarations: [BaseFormlyComponent]
})
export class SharedModule {}