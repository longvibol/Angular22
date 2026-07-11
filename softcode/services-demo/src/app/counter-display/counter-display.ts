import { Component,inject } from '@angular/core';
import { CounterServic } from '../services/counter';

@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
})
export class CounterDisplay {

  private counterService : CounterServic = inject(CounterServic);

  // constructor(private counterService: CounterServic){}

  getCurrentCount(): number{
    return this.counterService.getCount();
  }

}
