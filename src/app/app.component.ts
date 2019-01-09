import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'sample-app';
  ngOnInit() {
    console.log('OnInit!');
  }
  ngOnDestroy() {
    console.log('destroy!')
  }

}
