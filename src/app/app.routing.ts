import { RouterModule, Route } from '@angular/router';

import { PanierComponent } from './panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';


const APP_ROUTE: Route[] = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  { path: 'panier', component: PanierComponent },
  { path: 'cocktails', component: CocktailContainerComponent, children: [
     {path: '', component: CocktailDetailsComponent },
     {path: 'new', component: CocktailEditComponent },
     {path: ':index', component: CocktailDetailsComponent },
     {path: ':index/edit', component: CocktailEditComponent },
  ]}
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);