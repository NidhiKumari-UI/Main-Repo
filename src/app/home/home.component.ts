import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faCoffee = faCoffee;
  foods: Foods[] = [];
  constructor(private fs: FoodService) { }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }

}
