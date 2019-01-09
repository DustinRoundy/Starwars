import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Character} from "../../models/character";
import {CharacterService} from "../character.service";
import {CharacterListComponent} from "../character-list/character-list.component";
import { Location } from '@angular/common';

@Component({
  selector: 'dr-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.sass']
})
export class CharacterDetailComponent implements OnInit {
  character: Character;

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService, private location: Location) {

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      // this.characterService.getCharacters().subscribe((characters: Character[]) => {
      //   this.character = characters.find((character: Character) => character.id == params.id);
      // });
      console.log(data.character);
      this.character = data.character;
    })
  }

  delete(character: Character):void {
    this.characterService.deleteCharacter(character).subscribe();
    console.log("delete");
    console.log(character);
    // CharacterListComponent.getCharacters();
    // this.location.back();
  }

}
