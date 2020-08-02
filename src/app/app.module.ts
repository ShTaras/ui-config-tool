import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from "./core";
import { MaketComponent } from './maket/maket.component';

import {SharedModule} from "./shared/shared.module";
import {DragulaModule, DragulaService} from "ng2-dragula";
import { BoxIconComponent } from './maket/components/box-icon/box-icon.component';
import { BoxTextComponent } from './maket/components/box-text/box-text.component';

@NgModule({
  declarations: [
    AppComponent,
    MaketComponent,
    BoxIconComponent,
    BoxTextComponent
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
