import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ShellRoutingModule } from './app-shell-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material-module';
import { FormlyMaterialModule } from "@ngx-formly/material";


@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormlyMaterialModule
  ],
})
export class AppShellModule { }
