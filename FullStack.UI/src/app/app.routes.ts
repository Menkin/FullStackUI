import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/Employees/employee-list/employee-list.component';
import { ExecutiveListComponent } from './components/Executives/executive-list/executive-list.component';
import { ArticlesComponent } from './components/Articles/articles.component';

export const routes: Routes = [
    {path: 'employee-list', component: EmployeeListComponent},
    {path: 'executive-list', component: ExecutiveListComponent},
    {path: 'articles', component: ArticlesComponent}
];
