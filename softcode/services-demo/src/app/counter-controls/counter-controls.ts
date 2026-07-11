import { Component, inject } from '@angular/core';
import { CounterServic } from '../services/counter';

@Component({
  selector: 'app-counter-controls',
  imports: [],
  templateUrl: './counter-controls.html',
  styleUrl: './counter-controls.css',
})
export class CounterControls {

  private counterService: CounterServic = inject(CounterServic);

  // constructor(private counterService: CounterServic){ }

  onIncrement() : void{
    this.counterService.increment();
  }

  onDecrement() : void{
    this.counterService.decrement();
  }

  onReset(): void {
    this.counterService.reset();
  }

}
