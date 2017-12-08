

## Features
- Angular [AoT compilation](https://angular.io/guide/aot-compiler)
- Angular [Lazy-loading modules with the router](https://angular.io/guide/ngmodule#lazy-loading-modules-with-the-router)
- Angular [Style Guide](https://angular.io/guide/styleguide)
- Webpack [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)
- Webpack [DevServer](https://webpack.js.org/configuration/dev-server/)
- Development & Production builds
- SASS, CSS
- Testing client using _Jasmine_ and _Karma_
- Testing server usign _xUnit_
- _Yarn_ & _npm 5_


#### Visual Studio
The installed _nodejs_ on your system needs to be used inside Visual Studio and not the _nodejs_ from Visual Studio. You need to set the path of your node before the VS node.

In Visual Studio: _Tools -> Options -> Projects and Solutions -> Web Package Management -> External Web Tools_

Move the _$(Path)_ option above the Visual Studio one.

#### NPM Task Runner
The _NPM Task Runner_ can be used to build the client application from inside Visual Studio. This task runner can be downloaded from:

https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner

## <a name="3"></a>Running
The ASP.NET Core application contains both the server side API services and also hosts the Angular client application. The source code for the Angular application is implemented in the _angularApp_ folder. Webpack is then used to deploy the application, using the development build or a production build, which deploys the application to the wwwroot folder. This makes it easy to deploy the application using the standard tools from Visual Studio with the standard configurations.

### <a name="3.1"></a>Commands
The npm scripts are used to build, watch the client application as required. The scripts can be run from the command line or the _NPM Task Runner_.

The _watch-webpack-dev_ npm script automatically starts in Visual Studio because it has been added to the _package.json_:
```
"-vs-binding": { "ProjectOpened": [ "watch-webpack-dev" ] }
```

All available commands are the following:
```
"start": "concurrently \"webpack-dev-server --env=dev --open --hot --inline --port 8080\" \"dotnet run\" ",
"webpack-dev": "webpack --env=dev",
"webpack-production": "webpack --env=prod",
"build-dev": "npm run webpack-dev",
"build-production": "npm run webpack-production",
"watch-webpack-dev": "webpack --env=dev --watch --color",
"watch-webpack-production": "npm run build-production --watch --color",
"publish-for-iis": "npm run build-production && dotnet publish -c Release",
"test": "karma start",
"test-ci": "karma start --single-run --browsers ChromeHeadless",
"lint": "tslint ./angularApp"
```

### <a name="3.2"></a>Development
For the Angular app, we use _JiT compilation_.
```
npm run build-dev
```
#### Watch for development
```
npm run watch-webpack-dev
```
#### Hot Module Replacement
```
npm start
```

### <a name="3.3"></a>Production
For the Angular app, we use _AoT compilation_, tree shaking & minification.
```
npm run webpack-production
```

## <a name="4"></a>Testing
The _xUnit_ test for ASP.NET Core API is in _tests/AngularWebpackVisualStudio_Tests_ folder:
```
dotnet test
```
or from Visual Studio: _Test -> Run -> All Tests_

See this link for more details on _xUnit_ testing in ASP.NET Core: https://docs.microsoft.com/it-it/dotnet/articles/core/testing/unit-testing-with-dotnet-test

The Angular test is in _angularApp/tests_ folder. It uses _Karma_ test runner and _Jasmine_ test framework:
```
npm test
```

runs the tests and watches for development. If you want to run the tests with a headless browser only one single time just type
```
npm run test-ci
```

See this link for more details on Angular testing: https://angular.io/guide/testing




## <a name="6"></a>Notes
The Webpack configuration could also build all of the scss and css files to a separate _app.css_ or _app."hash".css_ which could be loaded as a single file in the distribution. Some of the vendor js and css could also be loaded directly in the html header using the _index.html_ file and not included in the Webpack build.


