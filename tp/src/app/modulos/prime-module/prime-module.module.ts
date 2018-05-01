import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {TabMenuModule} from 'primeng/tabmenu';
import {DialogModule} from 'primeng/dialog';
import {PasswordModule} from 'primeng/password';


@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    CarouselModule,
    TabMenuModule,
    DialogModule,
    PasswordModule
    
  ],
  exports:[
    MenubarModule,
    CardModule,
    CarouselModule,
    TabMenuModule ,
    DialogModule,
    PasswordModule
  ],
  declarations: []
})
export class PrimeModuleModule { }
