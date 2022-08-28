import { NgModule } from "@angular/core";
import { PanelWrapperComponent } from "./formly-wrappers/panel-wrapper/panel-wrapper.component";
import { FormlyWrappersConfig } from "./formly-wrappers/formly-wrappers.config";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyWrappers } from "./formly-wrappers";

@NgModule({
    imports: [
        FormlyMaterialModule,
        FormlyModule.forRoot({
            wrappers: FormlyWrappersConfig
        })
    ],
    declarations: [...FormlyWrappers]
})
export class  FormlyCoreModule{ }