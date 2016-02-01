System.register(['angular2/core', 'angular2/router', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1;
    var TableCreaterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            TableCreaterComponent = (function () {
                function TableCreaterComponent(http) {
                    this.http = http;
                }
                TableCreaterComponent.prototype.create = function (nickname) {
                    var headers = new http_1.Headers();
                    var creds = JSON.stringify({ nickname: nickname });
                    headers.append('Content-Type', 'application/json');
                    this.http.post('http://api.gofish.dev/game', creds, {
                        headers: headers
                    })
                        .subscribe(function (data) {
                        console.log(nickname);
                    });
                };
                TableCreaterComponent = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS],
                        template: "\n    <label>Enter nickname: </label>\n    <input #nickname placeholder=\"name\">\n    <button (click)=\"create(nickname.value)\">Create table</button>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TableCreaterComponent);
                return TableCreaterComponent;
            })();
            exports_1("TableCreaterComponent", TableCreaterComponent);
        }
    }
});
//# sourceMappingURL=table-creater.component.js.map