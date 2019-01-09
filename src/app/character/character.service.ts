import { Injectable } from '@angular/core';
import { Character} from "../models/character";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Hero} from "../../../../../toh-pt5/src/app/hero";
import {switchMap, take} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private Url = 'api/characters/';

  constructor(private httpClient: HttpClient) {
    this.playingWithObservable();
  }

  getCharacters(): Observable<Character[]>{
    return this.httpClient.get<Character[]>(this.Url);
  }

  getCharacter(id: number): Observable<Character>{
    // return this.httpClient.get<Character[]>(this.Url).pipe(
    //   switchMap((characters: Character[]) =>
    //     of(characters.find((character: Character) => character.id == id)
    //     ))
    // )
    return this.httpClient.get<Character>(`${this.Url}${id}`);
  }

  updateCharacter (character: Character): Observable<any> {
    return this.httpClient.put(this.Url, character);
  }

  addCharacter (character: Character): Observable<Character> {
    return this.httpClient.post<Character>(this.Url, character);
  }

  deleteCharacter (character: Character | number): Observable<Character> {
    const id = typeof character === 'number' ? character : character.id;
    const url = `${this.Url}${id}`;
    console.log(url);

    return this.httpClient.delete<Hero>(url);
  }

  playingWithObservable() {
    let ourObservable = Observable.create(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });

    ourObservable.subscribe(value => {
      console.log(value);
    });

    ourObservable.pipe(
      take(1)
    ).subscribe(value => {
      console.log(value);
    })
  }
}
