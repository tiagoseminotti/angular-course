import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shopListService: ShoppingListService) {}

  ngOnInit() {
  }

  onIngredientAdded(name: string, amount: number){
    this.shopListService.addIngredient([new Ingredient(name, amount)]);
  }
}