import { NgModule } from "@angular/core";
import { PanelWrapperComponent } from "./formly-wrappers/panel-wrapper/panel-wrapper.component";
import { FormlyWrappersConfig } from "./formly-wrappers/formly-wrappers.config";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
    imports: [
        FormlyMaterialModule,
        FormlyModule.forRoot({
            wrappers: FormlyWrappersConfig
        })
    ],
    declarations: [PanelWrapperComponent]
})
export class FormlyCoreModule { }