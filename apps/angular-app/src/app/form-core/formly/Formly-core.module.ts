import { NgModule } from "@angular/core";
import { FormlyWrappersConfig } from "./formly-wrappers/formly-wrappers.config";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyWrappers } from "./formly-wrappers";
import { FormlyMatDatepickerModule } from "@ngx-formly/material/datepicker";

@NgModule({
    imports: [
        FormlyMaterialModule,
        FormlyModule.forRoot({
            wrappers: FormlyWrappersConfig
        }),
        FormlyMatDatepickerModule
    ],
    declarations: [...FormlyWrappers]
})
export class  FormlyCoreModule{ }