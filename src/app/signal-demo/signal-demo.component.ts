import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.scss',
  standalone: true
})
export class SignalDemoComponent {
  inputValue = signal('');
  constructor() {};

  handleChangeOfInput(event: Event): void {
    try {
      const getInputValue = event.target as HTMLInputElement;
      this.inputValue.set(getInputValue.value);
    } catch (error) {
      console.log(error);
    };
  };
};
