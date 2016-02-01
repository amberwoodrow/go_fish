import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';

@Component({
  providers: [HTTP_PROVIDERS],
  template: `
    <form class="form-inline">
      <section class="form-group">
        <label>Enter nickname: </label>
        <input #nickname class="form-control" placeholder="name">
        <button type="submit" class="btn btn-default" (click)="create(nickname.value)">Create table</button>
      </section>
    </form>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class TableCreaterComponent {
  constructor(public http:Http) {}
  create(nickname) {
    var headers = new Headers();
    let creds = JSON.stringify({ nickname: nickname });
    headers.append('Content-Type', 'application/json');

    this.http.post('http://api.gofish.dev/game', creds, {
      headers: headers
      })
      .subscribe(
        data => {
          console.log(nickname);
    },
        err => console.log(err.json().message)
    );
  }
}
