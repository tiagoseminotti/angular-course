import { Recipe } from "./recipe.model";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { RecipeService } from "./recipe.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
    constructor(private recipeService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
        return this.recipeService.getRecipe(+route.params['id']);
    }
}