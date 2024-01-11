import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  taskService: TaskService = inject(TaskService); 

  tasks: Task[] = [];
  currentItemId: number = 1;
  detailsForm!: FormGroup;

  constructor() {
    this.currentItemId = Number(this.route.snapshot.params['taskId']);
    console.log(this.currentItemId);
    this.taskService.getTasks().subscribe((tasks) => {
      console.log(tasks);
      this.tasks = tasks;
      this.detailsForm = new FormGroup({
        text: new FormControl(this.tasks[this.currentItemId - 1].text),
        day: new FormControl(this.tasks[this.currentItemId - 1].day),
      });
    });
  }
}
