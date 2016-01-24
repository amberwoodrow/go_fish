import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  template: `
    <label>Enter nickname:</label>
    <input>
    <button (click)="create()">Create Table!</button>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class TableCreaterComponent {
  create() {
    // http post
  }
}
