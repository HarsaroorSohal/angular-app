import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JollyAppender } from '../../pipes/jolly-appendor.pipe';

type Task = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterModule, JollyAppender],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  constructor() {}
  @Input() task: Task;
  @Output() deleteTaskEvent = new EventEmitter<number>();
  @Output() reminderToggleEvent = new EventEmitter<Task>();

  handleTaskDelete(id: number) {
    this.deleteTaskEvent.emit(id);
  }
  handleReminderToggle(task: Task) {
    this.reminderToggleEvent.emit(task);
  }
}
