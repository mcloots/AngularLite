import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  studenten : Student[] = [];

  constructor(private _studentService: StudentService) {
    this.studenten = _studentService.getStudenten();
   }

  ngOnInit() {
  }

}
