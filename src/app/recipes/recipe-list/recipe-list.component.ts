import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { RecipeModel } from '../recipe-item.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:RecipeModel[]
  form:boolean = false
  name:string
  description:string
  imageurl:string

  @ViewChild("mouseevent") mouseevent : ElementRef
  constructor(private RecipeService : RecipeService) { 

  }

  AddItems(){
    // this.recipes.push(new RecipeModel(this.name,this.description,this.imageurl))
    this.RecipeService.AddRecipe(this.name,this.description,this.imageurl)
    this.recipes = this.RecipeService.getRecipeList()
    this.name=""
    this.description=""
    this.imageurl=""
    this.form=false
  }

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipeList()
  }

}
