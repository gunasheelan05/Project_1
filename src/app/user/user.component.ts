import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

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
  profilePicture = input.required<string>();
  profileName = input.required<string>();
  userId = input.required<string>();

  // Normal Approach For Outputing The Emit
  // @Output() selectedUser: EventEmitter<string> = new EventEmitter<string>();
  
  // Mordern Approach For Outputing the Data From Child To Parent
  selectedUser = output<string>();
  
  constructor() {};
  get getImageWithPath() {
    return `assets/png/${this.profilePicture()}`;
  };

  handleClickEvent(userId: string): void {
    try {
      // Outputing The UserId To Parent Component
      this.selectedUser.emit(userId);
    } catch (error) {
      console.log(error);
    };
  };
};