import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    
  ],
  exports:[
    BrowserAnimationsModule,
    MatToolbarModule,
    
  ],
  declarations: []
})
export class MaterialModuleModule { }
