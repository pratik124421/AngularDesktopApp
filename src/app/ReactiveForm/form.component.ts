import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ["male","female"]
  FormGroup : FormGroup
  notallowedNames = ["user","admin"]
  ngOnInit(): void {

    this.FormGroup = new FormGroup({
      "UserData":new FormGroup({
        "username":new FormControl("pratik",[Validators.required,this.NotAllowedUsername.bind(this)]),
        "email":new FormControl(null,[Validators.email,Validators.required],this.NotAllowedEmail),
      }),
      "gender":new FormControl("male"),
      "hobbies":new FormArray([])
    })
    
    
    this.FormGroup.valueChanges.subscribe(
      (value)=>console.log(value)
    )

    
    this.FormGroup.statusChanges.subscribe(
      (status)=>console.log(status)
    )

  }

  onSubmit(){
    console.log(this.FormGroup)
  }

  getControl(){
    return (this.FormGroup.get("hobbies") as FormArray).controls
  }

  onAddHobbies(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.FormGroup.get("hobbies")).push(control)
  }

  NotAllowedUsername(control : FormControl):{[$:string]:boolean}{
    console.log(this.notallowedNames.indexOf(control.value))
    if(this.notallowedNames.indexOf(control.value)!=-1){
      return {"notAllowed":true}
    }else{
      return null
    }
  }

  NotAllowedEmail(control : FormControl):Promise<any>|Observable<any>{
    
    const promise = new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
          if(control.value=="ps.prajapati@tcs.com"){
            resolve({"notAllowed":true})
          }else{
            reject(null)
          }
        },1000)
      }
    )
    return promise
  }
 
}
