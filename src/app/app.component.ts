import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
// import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { DummyUser, DUMMY_USERS } from './dummy-users';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  public userDatas: DummyUser[] = DUMMY_USERS ;
  constructor() {};
};