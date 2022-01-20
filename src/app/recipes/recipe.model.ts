export class Recipe{
  name: string | undefined;
  description: string | undefined;
  imagePath: string | undefined;

  constructor(name: string | undefined, description: string | undefined, imagePath: string | undefined){
    this.name = name;
    this.description= description;
    this.imagePath = imagePath;
  }
}
