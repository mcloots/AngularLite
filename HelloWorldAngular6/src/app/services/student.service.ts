import { Injectable } from '@angular/core';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studenten: Student[] = [];

  constructor() {
    this.studenten.push(new Student("Jos", "De Wachter", "3ITF"));
    this.studenten.push(new Student("Dirk", "De Weger", "2ITF"));
    this.studenten.push(new Student("Renaat", "De Vroker", "3ITF"));
  }

  getStudenten(): Student[] {
    return this.studenten;
  }
}
