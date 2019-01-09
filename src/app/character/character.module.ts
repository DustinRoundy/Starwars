import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterPipe} from "./character.pipe";
import {CharacterDetailComponent} from "./character-detail/character-detail.component";
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import {CharacterListComponent} from "./character-list/character-list.component";

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterPipe,
    CharacterDetailComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterPipe,
  ]
})
export class CharacterModule { }
