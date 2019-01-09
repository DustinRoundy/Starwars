import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable, of} from 'rxjs';
import {Character} from "../models/character";
import {CharacterService} from "./character.service";


@Injectable({
  providedIn: 'root'
})
export class CharacterResolveGuard implements Resolve<Character> {

  constructor(private characterService: CharacterService){

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
      // route.params.id

    return this.characterService.getCharacter(route.params.id);
  }
}
