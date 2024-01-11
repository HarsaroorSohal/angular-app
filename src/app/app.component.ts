import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, TasksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  @ViewChild(TasksComponent) child;
  ngAfterViewInit(): void {
    console.log(this.child);
  }
  title = 'angular-app';
}
