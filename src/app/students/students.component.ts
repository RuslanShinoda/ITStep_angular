import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students = [
    { name: 'David', age: 20, country: 'Ukraine' },
    { name: 'Alex', age: 25, country: 'USA' },
    { name: 'Leonid', age: 30, country: 'Poland' },
    { name: 'Valentin', age: 18, country: 'Ukraine' },
    { name: 'Roman', age: 15, country: 'USA' },
    { name: 'Nataly', age: 21, country: 'Poland' },
  ];

  countryFilter: string = '';
  ageFilter: number | null = null;

  filterStudents() {
    let ageFilterNumber = Number(this.ageFilter);

    return this.students.filter(
      (students) =>
        students.country.toLowerCase() === this.countryFilter.toLowerCase() ||
        students.age >= ageFilterNumber
    );
  }
}
