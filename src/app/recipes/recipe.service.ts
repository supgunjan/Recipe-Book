import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe(  'Veg Burger','Recipe of veg Burger','https://5.imimg.com/data5/TK/HN/GLADMIN-61562583/yum-veggie-500x500.png',[new Ingredient('Buns',8),new Ingredient('Cabbage',1),new Ingredient('Potato', 2)]),
        new Recipe(  'Tandoori Momos','Recipe of Momos','https://img-global.cpcdn.com/recipes/aa12bb758db3d83c/640x640sq70/photo.jpg',[new Ingredient('Flour',1), new Ingredient('Veggies',4), new Ingredient('Paneer',1)])
      ]

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.splice(0);
    }
    toShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.toShoppingList(ingredients);
    }
}