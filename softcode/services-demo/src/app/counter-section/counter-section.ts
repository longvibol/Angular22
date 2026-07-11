import { Component } from '@angular/core';
import { CounterDisplay } from '../counter-display/counter-display';
import { CounterControls } from '../counter-controls/counter-controls';
import { CounterStatus } from '../counter-status/counter-status';
import { CounterServic } from '../services/counter';

@Component({
  selector: 'app-counter-section',
  imports: [CounterDisplay,CounterControls,CounterStatus],
  templateUrl: './counter-section.html',
  styleUrl: './counter-section.css',
  providers:[CounterServic]
})
export class CounterSection {

}
