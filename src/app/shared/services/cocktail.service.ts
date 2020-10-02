import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


import { Cocktail } from '../models/cocktail.model';
import { Ingredient} from '../models/ingredient.model'

@Injectable()
export class CocktailService {
	public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor( private http: HttpClient){
    this.initCocktails();
  }

  initCocktails(): void {
    this.http.get<Cocktail[]>('https://cocktails-angular-c1060.firebaseio.com/cocktails.json').subscribe((cocktails: Cocktail[]) => {
      this.cocktails.next(cocktails);
    })
  }
  
  getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
      filter((cocktails: Cocktail[]) => cocktails !== null ),
      map((cocktails: Cocktail[]) => cocktails[index])
    );
  }

  // addCocktail(cocktail: Cocktail): void{
  //   const cocktails= this.cocktails.value.slice();
  //   cocktails.push(new Cocktail(cocktail.name, cocktail.img, cocktail.desc, cocktail.ingredients.map(ingredient => new Ingredient(ingredient.name, ingredient.quantity))));
  //   this.cocktails.next(cocktails);
  // }

  addCocktail(cocktail: Cocktail) {
    const cocktails = this.cocktails.value;
    cocktails.push({name: cocktail.name, img: cocktail.img, desc: cocktail.desc, ingredients: cocktail.ingredients})
    this.cocktails.next(cocktails);
  }
  
  // editCocktail(editCocktail: Cocktail): void{
  //   const cocktails = this.cocktails.value.slice(); 
  //   const index = cocktails.map( c => c.name ).indexOf(editCocktail.name);
  //   cocktails[index] = editCocktail;
  //   this.cocktails.next(cocktails);
  // }

  editCocktail(editCocktail: Cocktail) {
    const cocktails = this.cocktails.value;
    let index = cocktails.findIndex(c => c.name === editCocktail.name);
    cocktails[index] = editCocktail;
    this.cocktails.next(cocktails);
  }

}

