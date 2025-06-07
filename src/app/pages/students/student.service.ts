import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private students: Student[] = [];

  getAll(): Student[] {
    return this.students;
  }

  add(student: Omit<Student, 'id'>): void {
    this.students.push({ id: uuid(), ...student });
  }

  update(id: string, updated: Partial<Student>): void {
    const index = this.students.findIndex(s => s.id === id);
    if (index !== -1) {
      this.students[index] = { ...this.students[index], ...updated };
    }
  }

  delete(id: string): void {
    this.students = this.students.filter(s => s.id !== id);
  }

  importCSV(data: Student[]): void {
    for (const s of data) {
      this.add({
        firstName: s.firstName,
        lastName: s.lastName,
        email: s.email,
        promotion: s.promotion,
        specialty: s.specialty
      });
    }
  }
}
