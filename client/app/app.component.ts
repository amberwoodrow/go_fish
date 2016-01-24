import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './game/home.component';

@Component({
    selector: 'go-fish-app',
    template: `
      <h1>Go Fish</h1>
      <router-outlet></router-outlet>
      `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/', name:'Home', component: HomeComponent, useAsDefault: true}
])
export class AppComponent { }
