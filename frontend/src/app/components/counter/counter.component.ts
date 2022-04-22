import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

export interface Counter {
  plus: number
  minus: number
  timeCreate: string
}

export interface History {
  action: string
  timeCreate: string
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})

export class CounterComponent implements OnInit {

  counter: number = 0
  sendServer: Counter
  data: History[] = []

  constructor(private service: CounterService) {
    this.sendServer = {plus: 0, minus: 0, timeCreate: ''}
  }

  ngOnInit(): void {
    this.service.getHistory().subscribe((data: Counter[]) => {
      let object: History
      data.forEach((item) => {
        if(item.plus == 0 && item.minus == 1) {
          object.action = 'Уменьшили счетчик'
          object.timeCreate = item.timeCreate
        } else {
          object.action = 'Увеличили счетчик'
          object.timeCreate = item.timeCreate
        }
        this.data.push(object)
      })
      console.log(this.data)
    })
  }

  public deduct() {
    if (this.counter != 0) {
      this.counter--;
      this.sendServer.minus = 1
      this.sendServer.plus = 0
      this.service.create(this.sendServer).subscribe(() => {

      })
    }
  }

  public add() {
    this.counter++;
    this.sendServer.minus = 0
    this.sendServer.plus = 1
    this.service.create(this.sendServer).subscribe(() => {

    })
  }

}
