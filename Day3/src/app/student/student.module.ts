import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule {

 }
 export class Student{
  firstName:string="";
  lastName:string="";
  age:number=0;
}
