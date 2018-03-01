import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http } from '@angular/http';


declare var $:any;

@NgModule({
    declarations: [ 
       
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
 providers:[
  ]
})
export class SharedModule{}