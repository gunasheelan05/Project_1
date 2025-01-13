import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true
})
export class UserComponent {
  public getSelectedUser: number = Math.floor(Math.random() * DUMMY_USERS.length);
  public userProfilePicture: string;

  constructor() {
    this.userProfilePicture = `assets/png/${DUMMY_USERS[this.getSelectedUser].avatar}`;
  };
  
  get getImageWithPath() {
    return `${DUMMY_USERS[this.getSelectedUser].name}`;
  }
};