import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../types/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

// Service responsible for fetching Tasks.
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/${id}`);
  }

  reminderToggle(task: Task): any {
    console.log('Reminder Toggled');
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, { headers });
  }
}
