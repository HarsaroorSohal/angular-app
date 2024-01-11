import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    title: 'Task Page'
  },
  {
    path: 'details/:taskId',
    component: AboutComponent,
    title: 'About Page'
  },
  {
    path: 'form',
    component: FormComponent
  }
];
