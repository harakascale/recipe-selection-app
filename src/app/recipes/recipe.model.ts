import { Ingredient } from "../share/ingredient.model";

export class Recipe{
  name: string | undefined;
  description: string | undefined;
  imagePath: string | undefined;
  ingredients: Ingredient[];

  constructor(
    name: string | undefined,
    description: string | undefined,
    imagePath: string | undefined,
    ingredients: Ingredient[]  ){
    this.name = name;
    this.description= description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
