import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})

export class EmployeesListComponent {

  employees: Employee[] = [
    {
      id: '85f94861-98b7-44f5-bb49-3318e20537a2',
      name: 'Scott',
      email: 'Scott.Garage@water.com',
      phone: 4698620082,
      salary: 60000,
      department: 'IT'
    },
    {
      id: '0f374207-3cf9-4ace-9039-36a08931e035',
      name: 'Sarah',
      email: 'Sarah.Bizsichi@aol.com',
      phone: 7825866941,
      salary: 35000,
      department: 'Human Resources'
    },
    {
      id: 'd4231998-00e6-46a1-96ef-ada0e7d993e6',
      name: 'Brock',
      email: 'Brock.Zalinger@gmail.com',
      phone: 8729991245,
      salary: 80000,
      department: 'IT'
    }
  ];
  constructor() { }
  
  ngOnInit(): void {

    
    
  }
}


