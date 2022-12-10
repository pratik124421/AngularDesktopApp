import { EventEmitter, Injectable } from "@angular/core";
import { RecipeModel } from "src/app/recipes/recipe-item.model";
import { Ingredient } from "../ingredient.model";
import { ShoppingService } from "./shopping.service";

@Injectable()
export class RecipeService{
    private Recipelist : RecipeModel[] = [new RecipeModel("Recipe","Manchuriyan Dry","https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg",[new Ingredient("Sault",1),new Ingredient("Paper",3)])]
    public recipeselected = new EventEmitter<RecipeModel>()
    
    constructor(private ShoppingService : ShoppingService){}

    AddRecipe(name:string,description:string,imageurl:string){
        this.Recipelist.push(new RecipeModel(name,description,imageurl,[new Ingredient("Sault",1),new Ingredient("Paper",3)]))
    }

    getRecipeList(){
        return this.Recipelist.slice()
    }

    AddIgredients(Ingredients? : Ingredient[]){
        this.ShoppingService.AddIgredientlist(Ingredients)
    }



}