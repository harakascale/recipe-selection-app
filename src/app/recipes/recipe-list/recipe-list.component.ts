import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe',  "This isa test", "https://tinyurl.com/2p98fnwh"),
    new Recipe('A test Recipe',  "This isa test", "https://tinyurl.com/2p98fnwh")
  ];


  constructor() { }

  ngOnInit(): void {
  }

  addRecipe(){

  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }

}
