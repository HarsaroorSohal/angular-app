import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private buttonState = new Subject<any>();
  buttonState$ = this.buttonState.asObservable();
  toggleButton(newColor) {
    this.buttonState.next(newColor);
  }
  constructor() {}
}
