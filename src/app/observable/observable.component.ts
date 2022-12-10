import { Component, OnDestroy, OnInit } from '@angular/core';

import {interval, Observable, Subscription} from "rxjs"
import {filter, map} from "rxjs/operators"
import { observerService } from './observer.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit,OnDestroy {

  activated : boolean
  private FirstObservable : Subscription
  private activatedsub : Subscription 

  constructor(private observerservice : observerService) { }

  ngOnInit(): void {

    this.activatedsub = this.observerservice.activated.subscribe(
      (data:boolean) => {
        this.activated = data
      }
    )

    // this.FirstObservable = interval( 1000).subscribe(count=>{
    //   console.log(count)
    // })


    const customObserver = Observable.create(
      (observer) => {
        let count = 0
        setInterval(()=>{
          if(count>2){
            observer.complete()
          }
          if(count>3){
            observer.error(new Error("Error Occured"))
          }
          observer.next(count)
          count++
        },1000)
      }
    )

    this.FirstObservable = customObserver.pipe(filter((count)=>{
      return count>0
    }),map((count:number)=>{
      return "round: "+(count+1)
    })).subscribe(
      (count)=>{
        console.log(count)
      },
      (error) => {
        console.log(error)
        // alert("error occured..")
      },
      () => {
        console.log("completed...")
        // alert("observer completed..")
      }
    )
  }

  activate(){
    // this.observerservice.activated.emit(true)
    this.observerservice.activated.next(true)
  }

  ngOnDestroy(): void {
    this.FirstObservable.unsubscribe()
    this.activatedsub.unsubscribe()

  }

}
