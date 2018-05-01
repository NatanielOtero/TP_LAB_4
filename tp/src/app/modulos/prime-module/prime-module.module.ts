import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    CarouselModule,
    TabMenuModule
    
  ],
  exports:[
    MenubarModule,
    CardModule,
    CarouselModule,
    TabMenuModule 
  ],
  declarations: []
})
export class PrimeModuleModule { }
