import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "src/app/form/form.component";
import { ObservableComponent } from "src/app/observable/observable.component";
import { ReactiveFormComponent } from "src/app/ReactiveForm/form.component";
import { RecipesComponent } from "src/app/recipes/recipes.component";
import { RouterTestComponent } from "src/app/RouterTest/RouterTest.component";
import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";

const Routers : Routes = [
    {path:"",redirectTo:"/recipe",pathMatch:"full"},
    {path:"recipe",component:RecipesComponent},
    {path:"shopping",component:ShoppingListComponent},
    {path:"testing",component:RouterTestComponent,children:[
      {path:":id/:name",component:RouterTestComponent}
    ]},
    {path:"observable",component:ObservableComponent},
    {path:"form",component:FormComponent},
    {path:"reactiveform",component:ReactiveFormComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(Routers)],
    exports:[RouterModule]
})
export class RoutersList{

}