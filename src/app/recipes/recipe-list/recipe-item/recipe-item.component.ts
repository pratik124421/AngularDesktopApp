import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { RecipeModel } from '../../recipe-item.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input("recipedata") recipe : RecipeModel
  // @Output() recipedetails = new EventEmitter<void>()

  constructor(private RecipeService : RecipeService) {
   }

  ngOnInit(): void {
  }

  showdetails(){
    this.RecipeService.recipeselected.emit(this.recipe)
  //  this.recipedetails.emit()
  }

}
