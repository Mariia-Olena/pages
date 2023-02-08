import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [
    {
      title: 'Chernivtsi',
      image: 'assets/images/chernivtsi.jpg',
    },
    {
      title: 'Kyiv',
      image: 'assets/images/kyiv.jpg',
    },
    {
      title: 'Summer Carpathian Mountains',
      image: 'assets/images/summer_carpathian_mountains.jpg',
    },
    {
      title: 'Winter Carpathian Mountains',
      image: 'assets/images/winter_carpathian_mountains.jpg',
    },
    {
      title: 'Odesa',
      image: 'assets/images/odesa.jpg',
    },
    {
      title: 'Lviv',
      image: 'assets/images/lviv.jpg',
    },
  ];

  currentIndex = 0;
}
