import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule
  ], exports:[MenuComponent] //Exporto o componente para que toda a aplicação o use.
})
export class MenuModule { }
