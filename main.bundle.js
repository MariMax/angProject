var ac_main =
webpackJsonpac__name_([1],{

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__(71);
var core_1 = __webpack_require__(0);
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    core_1.enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        platform_browser_1.disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(502));


/***/ },

/***/ 361:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
__export(__webpack_require__(499));


/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [
            __webpack_require__(668)
        ],
        template: "\n    <nav>\n      <span>\n        <a [routerLink]=\" ['./home'] \">\n          Login\n        </a>\n        </span>\n    </nav>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <footer>\n\n    </footer>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(71);
var forms_1 = __webpack_require__(238);
var http_1 = __webpack_require__(239);
var router_1 = __webpack_require__(240);
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__(241);
var app_routes_1 = __webpack_require__(501);
// App is our top level component
var app_component_1 = __webpack_require__(498);
var app_resolver_1 = __webpack_require__(500);
var home_1 = __webpack_require__(325);
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.slice();
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            home_1.HomeComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true, preloadingStrategy: router_1.PreloadAllModules })
        ],
        providers: [
            environment_1.ENV_PROVIDERS,
            APP_PROVIDERS
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ApplicationRef !== "undefined" && core_1.ApplicationRef) === "function" && _a || Object])
], AppModule);
exports.AppModule = AppModule;
var _a;


/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(10);
__webpack_require__(654);
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DataResolver);
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var home_1 = __webpack_require__(325);
exports.ROUTES = [
    { path: '', component: home_1.HomeComponent }
];


/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        // The selector is what angular internally uses
        // for `document.querySelectorAll(selector)` in our index.html
        // where, in this case, selector is the string 'home'
        selector: 'home',
        // We need to tell Angular's Dependency Injection which providers are in our app.
        providers: [],
        // Our list of styles in our component. We may add more to compose many styles together
        styles: [__webpack_require__(669)],
        // Every Angular template is first compiled by the browser before Angular runs it's compiler
        template: __webpack_require__(649)
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(361)();
// imports


// module
exports.push([module.i, "html, body{\r\n  height: 100%;\r\n  font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\nspan.active {\r\n  background-color: gray;\r\n}\r\n", ""]);

// exports


/***/ },

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(361)();
// imports


// module
exports.push([module.i, "/*styles for home content only*/", ""]);

// exports


/***/ },

/***/ 649:
/***/ function(module, exports) {

module.exports = "<div class=\"card-container\">\r\n  <h1 x-large class=\"sample-content\">Login Page</h1>\r\n\r\n  <div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(10);
var of_1 = __webpack_require__(70);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ 668:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(646);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(647);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__(146);
var environment_1 = __webpack_require__(241);
var hmr_1 = __webpack_require__(147);
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__(376);
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
// needed for hmr
// in prod this is replace for document ready
hmr_1.bootloader(main);


/***/ }

},[670]);
//# sourceMappingURL=main.map