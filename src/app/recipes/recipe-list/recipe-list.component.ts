import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Description',
      'https://live.staticflickr.com/65535/51560398739_b431486c97_b.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'Test Description',
      'https://live.staticflickr.com/65535/51560398739_b431486c97_b.jpg'
    ),
  ];
}
