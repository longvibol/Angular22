import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sip-calculator',
  imports: [FormsModule],
  templateUrl: './sip-calculator.html',
  styleUrl: './sip-calculator.css',
})
export class SipCalculator {
  title: string = "SIP Returns Calculator";

  //Input parameters
  monthlyAmount: number = 5000;
  investmentPeriod: number = 10; //in years
  expectedReturnRate: number = 12; //percentage
  
  //Calculated results
  totalInvestment: number = 0;
  maturityAmount : number = 0;
  estimatedReturns : number = 0;

  //constructor
  constructor()
  {
    this.calculateReturns();
  }


  //Calculate actual SIP returns
  calculateReturns(): void
  {
    //console.log("Calculate button clicked!");
    this.totalInvestment = this.monthlyAmount * 12 * this.investmentPeriod;

    //Simplified SIP calculation
    const monthlyRate = this.expectedReturnRate / 12 / 100;
    const months = this.investmentPeriod * 12;

    //Using compound interest formula for SIP
    const compoundFactor = Math.pow(1 + monthlyRate, months);
    this.maturityAmount = Math.round(this.monthlyAmount * ((compoundFactor - 1) / monthlyRate) * (1 + monthlyRate));

    //Calculate returns
    this.estimatedReturns = this.maturityAmount - this.totalInvestment;
  }

  //For property binding examples
  buttonTooltip: string = "Click to recalculate with current values";

  //Simple calculation method
  calculateYearlyInvestment(): number
  {
    return this.monthlyAmount * 12;
  }

  onPeriodComplete(event: Event): void
  {
    console.log('Change event fired');
  }

  //Property for tracking currently editing field
  currentlyEditing: string = '';

  onFieldFocus(fieldName: string): void
  {
    this.currentlyEditing = fieldName;
  }

  onFieldBlur(): void
  {
    this.currentlyEditing = '';
  }
<<<<<<< HEAD

  // Event Binding : MonthlyAmount
  updatePeriod(event: Event):void{
   const target = event.target as HTMLInputElement;
   const value : number = +target.value;

  if (isNaN(value) || value < 1)
    this.investmentPeriod = 1;
  else
    this.investmentPeriod = value;
  }

  // Event Binding : ExpectedReturnRate
  updateExpectedResturnRate(event: Event):void{
   const target = event.target as HTMLInputElement;
   const value : number = +target.value;

  if (isNaN(value) || value < 1)
    this.expectedReturnRate = 1;
  else
    this.expectedReturnRate = value;
  }

  // Change Event binding 
  onPeriodComplete(event: Event){
    console.log("Change event fired");
  }


=======
>>>>>>> d6be3e1823e153e5bd4b01dfa2881567a9d92f79
}