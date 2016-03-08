import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {LightBoxComponent} from "./lightbox.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>Lightbox Mock Server</h1>
    <div>{{id}}</div>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ ROUTER_PROVIDERS ],
    inputs: ['id']
})

@RouteConfig([
    {path: '/', name: 'LightBox', component: LightBoxComponent, useAsDefault: true}
])

export class AppComponent {}
