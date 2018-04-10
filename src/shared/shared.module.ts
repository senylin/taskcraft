import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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