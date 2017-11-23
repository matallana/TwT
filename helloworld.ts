/** imports */

import {NgModule, Component} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UIRouterModule} from "@uirouter/angular";

/** Components */

@Component({
  selector: 'my-app',
  template: `
  <a uiSref="hello" uiSrefActive="active">Hello</a>
  <a uiSref="about" uiSrefActive="active">About</a>
  
  <ui-view></ui-view>
  `
})
export class App { }

@Component({  
    templateUrl: './component/registro.html' 
})
class Hello { }

@Component({ 
  template: '<h3>Its the UI-Router hello world app!</h3>' 
})
class About { }


/** States */

let helloState = { name: 'hello', url: '/hola',  component: Hello }; 
let aboutState = { name: 'about', url: '/about',  component: About };

/** Root Application NgModule */

@NgModule({
  imports: [ 
    BrowserModule,
    UIRouterModule.forRoot({ states: [ helloState, aboutState ], useHash: true })
  ],
  declarations: [ App, Hello, About ],
  bootstrap: [ App ]
})
class RootAppModule {}

/** Angular 2 bootstrap */

platformBrowserDynamic().bootstrapModule(RootAppModule);
