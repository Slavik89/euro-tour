import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[] = [];  
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}   

  ngOnInit(): void {
    this.getHeroes();
    console.log(this.selectedHero);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  } 

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
