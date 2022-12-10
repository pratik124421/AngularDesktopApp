import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/services/recipe.service';
import { RecipeModel } from './recipe-item.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipedetail : RecipeModel

  constructor(private RecipeService : RecipeService) {
   }

  ngOnInit(): void {
    console.log(">>> recipe init")
    this.RecipeService.recipeselected.subscribe(
      (recipe:RecipeModel) => {
        console.log(">>>",recipe)
        this.recipedetail = recipe
      }
    )
  }

  printData(){

    // ipcRenderer.send("printPDF", "<h1> hello </h1>");
    console.log((<any>window).electronAPI);
    (<any>window).electronAPI.print("https://www.electronjs.org/docs/latest/api/web-contents#contentsprinttopdfoptions-callback")
  }

}
