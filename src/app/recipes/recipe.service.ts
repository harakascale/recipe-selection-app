import {  Injectable } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

 private recipes: Recipe[] = [
    new Recipe(
      'A Donut',
      "This  is good Donut",
      "https://tinyurl.com/2dnxx5uz",
      [
        new Ingredient("Flour", 1),
        new Ingredient("Sugar", 1),
      ]),
    new Recipe(
      'A Burger',
      "This is a okay Burger",
      "https://tinyurl.com/3bf7nb2h",
      [
        new Ingredient("Meat", 1),
        new Ingredient("Bread", 2),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }

}
