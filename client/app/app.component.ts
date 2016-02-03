import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './gofish/home/home.component';
import {GofishTableComponent} from './gofish/gofish-table/gofish-table.component';

@Component({
    selector: 'go-fish-app',
    template: `
      <h1>Games</h1>
      <router-outlet></router-outlet>
      `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/', name:'Home', component: HomeComponent, useAsDefault: true},
  {path:'/gofish', name:'GofishTable', component: GofishTableComponent}
])

export class AppComponent { }
