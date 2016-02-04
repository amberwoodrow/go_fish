import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';

@Component({
  selector: 'create-gofish-table',
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS],
  templateUrl: "app/gofish/create-gofish-table/create-gofish-table.html",
  directives: [ROUTER_DIRECTIVES]
})

export class CreateGofishTableComponent {
  myNickname: string;
  myTableName: string;
  gameID: string;

  constructor(public http:Http, private router: Router, private params: RouteParams) {
    this.myNickname = "";
    this.myTableName = "";
    this.gameID = "";
  }

  create(nickname, tableName) {
    this.myNickname = nickname;
    this.myTableName = tableName;
    this.gameID = "";

    var headers = new Headers();
    let creds = JSON.stringify({ nickname: nickname, tableName: tableName, gameID: this.gameID});
    headers.append('Content-Type', 'application/json');

    this.http.post('http://api.gofish.dev/game', creds, {
      headers: headers
      })
      .subscribe(
        data => {
          console.log(nickname, tableName);
          var body = JSON.parse(data._body);
          this.gameID = body.Success._id;
          this.router.navigate(['GofishTable', {id: body.Success._id}]);
    });
  }


}
