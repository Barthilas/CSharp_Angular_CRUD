import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    this.superHeroService.getSuperHeroes().subscribe((result) => {
      this.heroes = result;
    })
  }

  //would be better as observable, but for simplicity..
  updateHeroList(heroes: SuperHero[])
  {
    this.heroes = heroes;
  }

  initHero()
  {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero)
  {
    this.heroToEdit = hero;
  }
}
