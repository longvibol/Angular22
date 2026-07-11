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
    this.count +=1;
  }

  decrement(): void {
    this.count-=1;
  }

  reset(): void {
    this.count = 0;
  }
  
}
