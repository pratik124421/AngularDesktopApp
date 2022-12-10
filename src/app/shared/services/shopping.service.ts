import { EventEmitter } from "@angular/core";
import { Ingredient } from "../ingredient.model";

export class ShoppingService{

    IngredienChanged = new EventEmitter<void>()

    private ingredients:Ingredient[] = [
        new Ingredient("Apple",5),
        new Ingredient("Tomato",10)
      ]

    get Ingredients(){
        return this.ingredients.slice()
    }

    AddIgredients(newIngredient:Ingredient){
        this.ingredients.push(newIngredient)
        this.IngredienChanged.emit()
    }

    AddIgredientlist(newIngredient:Ingredient[]){
        this.ingredients.push(...newIngredient)
        this.IngredienChanged.emit()
    }

}