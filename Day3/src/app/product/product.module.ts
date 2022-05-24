import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { PowerToXPipe } from './product/power-to-x.pipe';
import { StringConvertPipe } from './product/string-convert.pipe';
import { ArraySplicePipe } from './product/array-splice.pipe';
import {RatingModule} from 'primeng/rating';
import {CalendarModule} from "primeng/calendar";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    PowerToXPipe,
    StringConvertPipe,
    ArraySplicePipe,

  ],
  imports: [

    CalendarModule,
    CommonModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
