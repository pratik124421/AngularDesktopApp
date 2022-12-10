import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild("ref") formRef : NgForm
  defaultSelected : string = "Ahm"
  genders = ["male","female"]
  username : string

  UserData = {
    username:"",
    email:"",
    location:"",
    gender:""
  }

  submited : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  suggestName(){
    this.username = "Pratik"
  // usefull only when you want to set whole form data
    //   this.formRef.setValue({
  //     userData:{
  //       username:this.username,
  //       email:"ps.prajapati@tcs.com"
  //     },
  //     select:this.defaultSelected,
  //     gender:"male"
  //   })

  this.formRef.form.patchValue(
    {
      userData:{
        username:"pratik"
      }
    }
  )

  }

  submit(ref:NgForm){
    console.log("submiteed..  ",ref)
    this.UserData.username = this.formRef.value.userData.username
    this.UserData.email = this.formRef.value.userData.email
    this.UserData.location = this.formRef.value.select
    this.UserData.gender = this.formRef.value.gender
    this.submited = true
    console.log(this.UserData)
    this.formRef.reset()
  }

  data(ref:NgForm){
    console.log(ref)
  }

}
