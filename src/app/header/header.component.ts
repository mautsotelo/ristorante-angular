import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { NewDishComponent } from '../new-dish/new-dish.component';
import { DishComponent } from '../dish/dish.component';
import { DishService } from '../dish/dish.service';
import { Dish } from '../dish/dish';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, NewDishComponent, DishComponent, CommonModule]
})
export class HeaderComponent {
  openNewDish = false;
  dishesList: Dish[] = [];
  dishService: DishService = inject(DishService);

  constructor() {
    this.refreshList();
  }

  refreshList() {
    this.dishService.getAllDishes().then((dishesList: Dish[]) => {
      this.dishesList = dishesList;
    });
  }

  closeNewDish() {
    this.openNewDish = false;
  }
}
