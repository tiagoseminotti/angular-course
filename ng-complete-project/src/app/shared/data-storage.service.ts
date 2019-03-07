import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{
    constructor(private httpClient: HttpClient, 
                private recipeService: RecipeService,
                private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        //const headers = new HttpHeaders().set('Authorization', 'Bearer ahlighaisnelksop');

        // return this.httpClient.put('https://angular-complete-project.firebaseio.com/recipes.json', 
        // this.recipeService.getRecipes(), 
        // {
        //     observe: 'body',
        //     params: params
        //     //headers: headers
        // });
        //return this.http.put('https://angular-complete-project.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());

        const req = new HttpRequest('PUT', 'https://angular-complete-project.firebaseio.com/recipes.json', 
            this.recipeService.getRecipes(), { reportProgress: true });

        return this.httpClient.request(req);
    }

    fetchRecipes() {
        const token = this.authService.getToken();

        //this.httpClient.get<Recipe[]>('https://angular-complete-project.firebaseio.com/recipes.json?auth=' + token)
        this.httpClient.get<Recipe[]>('https://angular-complete-project.firebaseio.com/recipes.json', {
            observe: 'body',
            responseType: 'json'
        })
        .pipe(
            map(
                (recipes) => {
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
        /*this.http.get('https://angular-complete-project.firebaseio.com/recipes.json?auth=' + token)
        .pipe(
            map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    // for (let recipe in recipes) {
                    //     if (!recipe['ingredients']){
                    //         console.log(recipe);
                    //         recipe['ingredients'] = [];
                    //     }
                    // }
                    return recipes;
                }
            )
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );*/
    }
}