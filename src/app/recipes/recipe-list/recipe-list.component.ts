import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(  'A Test Recipe','This is test','https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTIxMDkxMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0NTk2Njg4NX0.IRD_l12EqBNtLL_aVSvWbVJ6rx-fbtLbkpqj434TIkY/image.jpg?width=600'),
    new Recipe(  'Delicious Recipe','This is test','https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTIxMDkxMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0NTk2Njg4NX0.IRD_l12EqBNtLL_aVSvWbVJ6rx-fbtLbkpqj434TIkY/image.jpg?width=600')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
