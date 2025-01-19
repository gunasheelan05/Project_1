import { NgFor, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  standalone: true
})
export class TaskComponent {
  userName = input.required<string>();
  constructor() {};
};