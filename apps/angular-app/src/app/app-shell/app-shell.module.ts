import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ShellRoutingModule } from './app-shell-routing.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    ShellRoutingModule
  ],
})
export class AppShellModule {}
