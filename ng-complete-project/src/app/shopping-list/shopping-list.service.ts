import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients : Ingredient [] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredientsList(){
        return this.ingredients.slice();
    }

    addIngredient(ingredients :Ingredient[]){
        ingredients.forEach(ingredient => {
            const idx = this.ingredients.findIndex(i => i.name === ingredient.name);
            console.log(idx);

            if (idx !== -1){
                let ingredientOnList = this.ingredients.find(i => i.name === ingredient.name);
                ingredientOnList.amount += ingredient.amount;
                //Removes and adds updated ingredient with correct amount
                this.ingredients.splice(idx, 1, ingredientOnList);
            }
            else{
                this.ingredients.push(ingredient);
            }

            console.log(JSON.stringify(this.ingredients));
        });

        //this.ingredients.push(...ingredients);
        
        //Emits a changed event so that the outer component updates the list
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}