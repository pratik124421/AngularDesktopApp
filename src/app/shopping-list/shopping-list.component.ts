import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shared/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] 
  constructor(private ShoppingService : ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.ShoppingService.Ingredients
    this.ShoppingService.IngredienChanged.subscribe(
      ()=>{
        this.ingredients = this.ShoppingService.Ingredients
      }
    )
  }


}
