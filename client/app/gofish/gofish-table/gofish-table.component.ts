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
  nickname: string;
  formNotFilled;

  constructor(public http:Http, private router: Router) {
    this.formNotFilled = true;
    this.nickname = "";
  }

  create(nickname) {
    // nickname = nickname;
    this.formNotFilled = false;
    var headers = new Headers();
    let creds = JSON.stringify({ nickname: nickname });
    headers.append('Content-Type', 'application/json');

    this.http.post('http://api.gofish.dev/game', creds, {
      headers: headers
      })
      .subscribe(
        data => {
          console.log(nickname);
          // this.router.navigate(['Table'])
    });
  }


}
