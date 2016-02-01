import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './game/home/home.component';
import {TableCreaterComponent} from './game/table-create/table-creater.component';
import {TableComponent} from './game/table/table.component';

@Component({
    selector: 'go-fish-app',
    template: `
      <h1>Go Fish</h1>
      <router-outlet></router-outlet>
      `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/', name:'Home', component: HomeComponent, useAsDefault: true},
  {path:'/new-game', name:'TableCreater', component: TableCreaterComponent},
  {path:'/gofish', name:'Table', component: TableComponent}
])
export class AppComponent { }
