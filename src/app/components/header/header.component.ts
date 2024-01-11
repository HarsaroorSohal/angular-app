import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SizerComponent } from '../sizer/sizer.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, SizerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  title = 'Task Tracker';
  fontSizePx = 12;
  private buttonColor: string = 'green';
  buttonText: string = 'Add';
  subscription: Subscription;

  constructor(private UiService: UiService) {
    this.subscription = this.UiService.buttonState$.subscribe((value) => {
      this.buttonColor = value;
      this.buttonText = value === 'green' ? 'Add' : 'Close';
    })
  }

  handleClick() {
    this.UiService.toggleButton(this.buttonColor === 'green' ? 'red' : 'green');
  }

  getButtonColor() {
    return this.buttonColor;
  }

  checkRender() {
    console.log('Header was rendered');
  }
}
