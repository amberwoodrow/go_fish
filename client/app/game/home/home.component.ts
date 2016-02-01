import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  template: `
    <a [routerLink]="['TableCreater']">Create Table</a>
    <p>Tables to join</p>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {}
