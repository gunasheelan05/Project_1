import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
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
  public imgName: string = 'NoteBook.png';
  // For Computed Value Like img path + variable Name; we can user the compute
  imgUrl = computed(() => { 
    return `assets/png/${this.imgName}`
   });
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