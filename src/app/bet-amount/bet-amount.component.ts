import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bet-amount',
  templateUrl: './bet-amount.component.html',
  styleUrls: ['./bet-amount.component.css']
})
export class BetAmountComponent implements OnInit {
/**Properties  */
amount:number=0
@Input() amtnumbers:number[]=[0,1,5,10,20];

/*doorway */
@Output() totalBetAmount= new EventEmitter<number>()
  constructor() { }
  ngOnInit(): void {
  }

/* addnumber will sum of all
 the amount user want to bet for */ 
  addnumbers=(num:number)=>{
    if(num===0){
        this.amount=0
    }
    else{
        this.amount+=num; 
    }
    console.log("amount: " +this.amount);
    this.totalBetAmount.emit(this.amount)
  }
}
