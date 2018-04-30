import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    
  ],
  exports:[
    MenubarModule    
  ],
  declarations: []
})
export class PrimeModuleModule { }
