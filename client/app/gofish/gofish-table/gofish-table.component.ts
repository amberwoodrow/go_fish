import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';

@Component({
  selector: 'table-creater',
  providers: [HTTP_PROVIDERS],
  templateUrl: "app/gofish/gofish-table/gofish-table.html",
  directives: [ROUTER_DIRECTIVES]
})

export class GofishTableComponent {
  myNickname: string;
  myTableName: string;

  constructor(public http:Http, private router: Router) {
    this.myNickname = "";
    this.myTableName = "";
  }

  create(nickname, tableName) {
    this.myNickname = nickname;
    this.myTableName = tableName;

    var headers = new Headers();
    let creds = JSON.stringify({ nickname: nickname, tableName: tableName});
    headers.append('Content-Type', 'application/json');

    this.http.post('http://api.gofish.dev/game', creds, {
      headers: headers
      })
      .subscribe(
        data => {
          console.log(nickname, tableName);
          // this.router.navigate(['Table'])
    });
  }


}
