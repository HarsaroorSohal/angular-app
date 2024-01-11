import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() color: string;
  @Input() text: string;
  @Output() btnClick = new EventEmitter();
  constructor() {
    this.color = "red";
    this.text = "Default"
  }
  onClick() {
    this.btnClick.emit();
  }
  ngOnChanges() { 
    console.log('log: We Changed!')
  }

}
