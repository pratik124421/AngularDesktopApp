import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule, Routes} from "@angular/router"

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AppBasicDirective } from './Directives/Appbasic.directive';
import { DropdownDirective } from './Directives/Dropdown.directive';
import { TemplateHide } from './Directives/TemplateHide.directive';
import { RecipeService } from './shared/services/recipe.service';
import { ShoppingService } from './shared/services/shopping.service';
import { RouterTestComponent } from './RouterTest/RouterTest.component';
import { RoutersList } from './shared/Module/Router.module';
import { ObservableComponent } from './observable/observable.component';
import { observerService } from './observable/observer.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './ReactiveForm/form.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ReactiveFormComponent,
    RouterTestComponent,

    TemplateHide,
    DropdownDirective,
    AppBasicDirective,
    ObservableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutersList
  ],
  providers: [
    RecipeService,
    ShoppingService,
    observerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
