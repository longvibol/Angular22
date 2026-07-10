import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterServic {

  private count: number = 0;

  getCount():number {
    return this.count;
  }

  increment(): void {
    this.count +=10;
  }

  decrement(): void {
    this.count-=5;
  }

  reset(): void {
    this.count = 0;
  }
  
}
