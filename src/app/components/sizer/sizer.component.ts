import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sizer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span>
      <button (click)="inc()"> Inc </button>
      <button (click)="dec()"> Dec </button>
      <div> Size: {{size}} </div>
    </span>
  `,
  styles: ``
})
export class SizerComponent {
  @Input() size: number = 10;
  @Output() sizeChange = new EventEmitter<number>;
  inc () {
    this.size = this.size+1;
    this.emitSizeChangeEvent();
  }
  dec() {
    this.size = this.size-1;
    this.emitSizeChangeEvent();
  }

  emitSizeChangeEvent() {
    this.sizeChange.emit(this.size);
  }
}
