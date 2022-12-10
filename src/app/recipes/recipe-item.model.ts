import { Ingredient } from "../shared/ingredient.model";

export class RecipeModel{
    public name:string;
    public description:string;
    public imageurl:string;
    public ingredients : Ingredient[]

    constructor(name:string,description:string,imageurl:string,ingredients:Ingredient[]){
        this.name = name
        this.description = description
        this.imageurl=imageurl
        this.ingredients = ingredients
    }
}