import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SignalDemoComponent } from './signal-demo/signal-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
}