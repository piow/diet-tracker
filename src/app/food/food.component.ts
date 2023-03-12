import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent {
  name = 'pietruszka';
  foods = ['potato', 'carrot', 'tomato', 'lemon', 'peach'];
  foods2: Food[] = [
    { name: 'potato', id: '1' },
    { name: 'carrot', id: '2' },
    { name: 'tomato', id: '3' },
  ];
}

interface Food {
  id: string;
  name: string;
}
