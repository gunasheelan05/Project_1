import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
// import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { DummyUser, DUMMY_USERS } from './dummy-users';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  public userDatas: DummyUser[] = DUMMY_USERS ;
  public selectedUserName: string = this.userDatas[0].name;
  constructor() {};

  getSelectedUserId(userId: string): void {
    try {
      const findUserObject = this.userDatas.filter((userObject) =>  userObject.id == userId);
      if(Array.isArray(findUserObject) && findUserObject.length > 0) {
        this.selectedUserName = findUserObject[0].name;
        return;
      } else {
        alert("Something Went Wrong");
      };
    } catch (error) {
      console.log(error);
    };
  };
};