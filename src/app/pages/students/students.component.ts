import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent {
  students: Student[] = [];

  newStudent: Partial<Student> = {};

  constructor(private service: StudentService) {
    this.refresh();
  }

  refresh() {
    this.students = this.service.getAll();
  }

  add() {
    if (this.newStudent.firstName && this.newStudent.lastName) {
      this.service.add(this.newStudent as any);
      this.newStudent = {};
      this.refresh();
    }
  }

  delete(id: string) {
    this.service.delete(id);
    this.refresh();
  }

  onFileChange(evt: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json<Student>(ws);
      this.service.importCSV(data);
      this.refresh();
    };
    reader.readAsBinaryString(evt.target.files[0]);
  }
}
