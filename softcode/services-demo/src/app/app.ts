import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogDemo } from './log-demo/log-demo';
import { AnotherDemo } from './another-demo/another-demo';
import { CounterControls } from './counter-controls/counter-controls';
import { CounterDisplay } from './counter-display/counter-display';
import { CounterStatus } from './counter-status/counter-status';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LogDemo, AnotherDemo,CounterControls, CounterDisplay,CounterStatus],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
