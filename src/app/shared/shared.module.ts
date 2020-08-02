import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [],
    exports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],

})

export class SharedModule {

}
