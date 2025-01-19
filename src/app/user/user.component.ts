import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true
})
export class UserComponent {
  // public getSelectedUser: number = Math.floor(Math.random() * DUMMY_USERS.length);
  // public userProfilePicture: string;
  // Zone.js Approach
  // @Input({ required: true }) profilePicture!: string;
  // @Input({ required: true }) profileName!: string;
  
  // Signal Approach 
  profilePicture = input.required();
  profileName = input.required();

  constructor() {};

  get getImageWithPath() {
    return `assets/png/${this.profilePicture()}`;
  }
};