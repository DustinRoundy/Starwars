import { Component, OnInit } from '@angular/core';
import {Character} from "../../models/character";
import {CharacterService} from "../character.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'dr-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {

  constructor(private characterService: CharacterService, private router: Router) {

  }
  hideDetails = true;
  characterFilter: string = '';
  dateToRemember: Date = new Date(1999, 12, 12);
  characterArray: Character[] = [];


  ngOnInit() {
    this.getCharacters();
    // this.characterArray = [];
  }

  toggleDetails(): void {
    this.hideDetails = this.hideDetails != true;
  }

  updateForce(character: Character, $event) {
    character.force = $event;
    this.characterService.updateCharacter(character);
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characterArray = characters);
  }

  goToCharacter(id: number){
    this.router.navigate([`characters/${id}`]);
    console.log(`characters/${id}`);
  }

}
