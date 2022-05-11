import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudentModule } from '../student/student.module';
import { PowerToXPipe } from './power-to-x.pipe';
import { StringConvertPipe } from './string-convert.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    PowerToXPipe,
    StringConvertPipe,

  ],
  imports: [
    CommonModule,
    StudentModule,

  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class CoreModule {}


