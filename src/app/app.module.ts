import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from "./core";
import { MaketComponent } from './maket/maket.component';

import {SharedModule} from "./shared/shared.module";
import {DragulaModule, DragulaService} from "ng2-dragula";
import { BoxIconComponent } from './maket/components/onBox/box-icon/box-icon.component';
import { BoxTextComponent } from './maket/components/onBox/box-text/box-text.component';
import { BoxTitleComponent } from './maket/components/onBox/box-title/box-title.component';
import {PhoneIconComponent} from './maket/components/onPhone/box-icon/phone-icon.component';
import {PhoneTextComponent} from './maket/components/onPhone/box-text/phone-text.component';
import {PhoneTitleComponent} from './maket/components/onPhone/box-title/phone-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MaketComponent,
    BoxIconComponent,
    BoxTextComponent,
    BoxTitleComponent,
    PhoneIconComponent,
    PhoneTextComponent,
    PhoneTitleComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    DragulaModule
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
