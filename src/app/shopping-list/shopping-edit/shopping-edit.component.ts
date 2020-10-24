import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddClicked(){
      const name = this.nameInputRef.nativeElement.value;
      const amount = this.amountInputRef.nativeElement.value;
      const ingredient = new Ingredient(name,amount);
      // this.ingredientAdded.emit(ingredient);
      this.shoppingListService.onAddIngredients(ingredient);
  }

}
