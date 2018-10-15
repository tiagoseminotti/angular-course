import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient [];
  private subscription: Subscription
  
  constructor(private shopListService: ShoppingListService) {}
  
  ngOnInit() {
    //Sets initial value of list
    this.ingredients = this.shopListService.getIngredientsList();
    //Subscribe to the changed action, so when the ingredient list changes in the service, the ingredient list of this component is updated
    this.subscription = this.shopListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}