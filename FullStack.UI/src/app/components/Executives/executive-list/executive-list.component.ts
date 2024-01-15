import { Component, } from '@angular/core';
import { Executive } from '../../../models/executive.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-executive-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './executive-list.component.html',
  styleUrl: './executive-list.component.css'
})
export class ExecutiveListComponent {

  executives: Executive [] =
   [
    {
      id: '6a7b8c9d-0e1f-2a3b-4c5d-6e7f8a9b0c1d',
      name: 'Don Peterson',
      email: 'Don.Peterson@outlook.com',
      phone: '812-668-5248',
      role: 'CEO'
    },
    {
      id: '3f5d08ae-8a74-4a42-8c0b-388fb18f0a77',
      name: 'Jack Witaker',
      email: 'Jack.Witaker@outlook.com',
      phone: '921-145-7792',
      role: 'CFO'
    },
    {
      id: '10b9a117-7d0d-4e1a-b64c-6507c860f8d9',
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      phone: '987-654-3210',
      role: 'CTO'
    },

  ];
}
