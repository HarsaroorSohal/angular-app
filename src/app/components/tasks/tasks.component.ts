import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ItemComponent, ButtonComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];
  subscription: Subscription;
  color: string;
  private taskService = inject(TaskService);
  @ViewChild(ButtonComponent) button: ButtonComponent;
  @ViewChild(ItemComponent) item: ItemComponent;


  constructor(private UiService: UiService) {
    this.subscription = this.UiService.buttonState$.subscribe((val) => {
      this.color = val;
    });
  }
  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  handleTaskDelete(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    });
  }
  handleReminderToggle(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.reminderToggle(task).subscribe(() => {
      // this.tasks[task.id].reminder = !this.tasks[task.id].reminder
    });
  }
}
