import { Directive } from '@angular/core';
import { Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[addBackgroundColor]',
  standalone: true
})
export class AddBackgroundColorDirective {
  @Input() addBackgroundColor: string;
  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {
    console.log(this._elementRef.nativeElement, this.addBackgroundColor);
    this._elementRef.nativeElement.style.backgroundColor = this.addBackgroundColor;
  }
}
