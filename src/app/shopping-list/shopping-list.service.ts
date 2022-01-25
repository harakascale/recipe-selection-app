import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>(); // This is to inform angular of the  change to the original array
 private ingredients: Ingredient[]= [
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    let str = JSON.stringify(ingredient);
    console.log("Ingredeint been pushed" + str)
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[] ){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

}
