import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//EventEmitter is a build in angular class that allows to send data from child to the paraent
@Component({
  selector: 'app-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.css']
})
export class NumberPickerComponent implements OnInit {

  constructor() { }
  //properties 
  numberselected: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  totalnumbers: number = 0    //storing the total number selected.
  @Input() betnum: number[] = [] //storing the array of numbers 
  message: string = ""          // string message for user


  //property--- doorway 
  @Output() itemSelected = new EventEmitter<number[]>()

  ngOnInit(): void {
  }
  /* method for storing user selected numbers in an array
  will give message if number is duplicated or if user 
  selects more than 3 numbers*/
  betnumbers = (num: number) => {
    this.message = ""
    if (this.betnum.includes(num) === false) {
      this.message = ""
      this.totalnumbers += 1
      if (this.betnum.length < 3) {
        this.betnum.push(num)
        this.itemSelected.emit(this.betnum)
        console.log(this.betnum.length);
        console.log(this.betnum)
      }
      if (this.totalnumbers > 3) {
        console.log("You can only select 3 numbers!!")
        this.message = "You can only select 3 numbers!!"
      }
    }
    else {
      console.log("Num already selected !!")
      this.message = "Can not duplicate number"
    }
  }
  /* this method will clear the 
  list and clear  any messages that are displayed.*/
  clearlist = () => {
    this.totalnumbers = 0
    this.message = ""
    this.betnum = []
    this.itemSelected.emit(this.betnum)
    console.log(this.betnum)
  }

  /* This method will generate random numbers and push the unique numbers 
   to the list */
  random = () => {
    this.clearlist()
    while (this.betnum.length < 3) {
      let num = this.numberselected[Math.floor(Math.random() * this.numberselected.length)]
      console.log("number selected is " + num)
      if (this.betnum.includes(num) === false) {
        this.betnum.push(num)
      }
    }
    this.message = "Generating random numbers"
    //send the data
    this.itemSelected.emit(this.betnum)
    console.log(this.betnum);
  }


  /* method to change the color of the selected numbers  */
  changeBackgroundColor = (num: number) => {
    if (this.betnum.includes(num)) {
      return "red";
    }
    else {
      return "darkblue"
    }

  }
}
