import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients : Ingredient [] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredientsList(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    //Old adding method which checked if an item already existed and 
    //added the amount to the existing amount
    /*addIngredient(ingredients :Ingredient[]){
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
    }*/

    addIngredient(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        //Emits a changed event so that the outer component updates the list
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}