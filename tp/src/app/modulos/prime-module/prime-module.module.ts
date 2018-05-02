import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {TabMenuModule} from 'primeng/tabmenu';
import {DialogModule} from 'primeng/dialog';
import {PasswordModule} from 'primeng/password';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    CarouselModule,
    TabMenuModule,
    DialogModule,
    PasswordModule,
    ProgressBarModule,
    ProgressSpinnerModule
    
  ],
  exports:[
    MenubarModule,
    CardModule,
    CarouselModule,
    TabMenuModule ,
    DialogModule,
    PasswordModule,
    ProgressBarModule,
    ProgressSpinnerModule
  ],
  declarations: []
})
export class PrimeModuleModule { }
