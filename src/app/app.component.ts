import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'khanasr991580666';

  //properties
  betNumber: number[] = []
  betAmount: number = 0
  clicked: boolean = true
  message: string = ""


  //function --  accepts the data(recieves)
  //will enable the button when user selects a number and betamount greater then zero
  collectingBetNumbers = (dataFromChild: number[]) => {
    console.log(`Parent got ${dataFromChild} from the child component`)
    this.betNumber = dataFromChild.sort((a, b) => a - b)
    this.message = ""
    if (this.betNumber.length > 0 && this.betAmount > 0) {
      this.clicked = false;
    }
    else {
      this.clicked = true
    }
  }

  //funtion -- that will recieve the total amount 
  //the user has selected to bet 
  collectingAmount = (dataFromChild: number) => {
    console.log(`Parent got ${dataFromChild} from the child component`)

    this.betAmount = dataFromChild
    if (this.betNumber.length > 0 && this.betAmount > 0) {
      this.clicked = false;
    }
    else {
      this.clicked = true
    }
  }

  /**This method will dispaly an alert message with the total amount 
   * and the numbers selected by the user*/
  generateTicket = () => {
    if (this.betNumber.length <= 3) {
      this.message = ""
      this.betNumber
      alert(`
      Recipt: 
      Numbers selected:  ${this.betNumber} 
      Total paid:  $${this.betAmount}`)
    }
  }
}
