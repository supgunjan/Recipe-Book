import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] =[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',20)
      ]

      getIngredients(){
        // return this.ingredients;
        console.log(this.ingredients);

          return this.ingredients.slice(0);
      }

      onAddIngredients(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        console.log(this.ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice(0));
      }

      toShoppingList(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.emit(this.ingredients.slice(0));
      }
}