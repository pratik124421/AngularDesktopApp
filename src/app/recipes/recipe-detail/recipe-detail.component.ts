import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { ShoppingService } from 'src/app/shared/services/shopping.service';
import { RecipeModel } from '../recipe-item.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input("recipedata") recipe : RecipeModel
  constructor(
    private RecipeService : RecipeService,
    private Router : Router,
    private Route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    
  }

  sendtoshoppinglist(recipe:RecipeModel){
    console.log(this.Route)
    this.RecipeService.AddIgredients(recipe.ingredients)
    this.Router.navigate(["/shopping"],{relativeTo:this.Route})
  }

}
