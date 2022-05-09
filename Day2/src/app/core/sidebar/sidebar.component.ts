import { Component, OnInit } from '@angular/core';
import { Student } from '../../student/student.module';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  student: Student = new Student();
  students: Student[] = [];
  setFirstName(newFirstName: string): void {
    this.student.firstName = newFirstName;
  }
  setLastName(newLastName: string): void {
    this.student.lastName = newLastName;
  }
  setAge(newAge: string): void {
    this.student.age = Number(newAge);
  }
  add(firstName: string, lastName: string, age: string): void {
    // define object from Student Class
    let student = new Student();
    student.firstName = firstName;
    student.lastName = lastName;
    student.age = Number(age);
    this.students.push(student);
  }
  edit(firstName: string, lastName: string, age: string, index:number): void {
    console.log(index);
    this.students[index].firstName=firstName;
    this.students[index].lastName=lastName;
    this.students[index].age=Number(age);


  }

  delete(index:number):void{
    this.students.splice(index,1)
  }

  getSudentCount(): number {
    return this.students.length;
  }

}

