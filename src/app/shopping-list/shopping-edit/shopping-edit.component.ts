import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("name") nameInputRef : ElementRef
  @ViewChild("amount") amountInputRef:ElementRef

  constructor(private ShoppingService : ShoppingService) { }

  ngOnInit(): void {
  }

  addIngrediants(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value)

    this.ShoppingService.AddIgredients(newIngredient)

  }

}
