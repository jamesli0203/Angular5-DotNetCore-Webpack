import './styles.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import '../node_modules/primeng/resources/themes/omega/theme.css';
//import '../node_modules/primeng/resources/primeng.min.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
// import 'primeng/resources/themes/afterdark/theme.css';
import 'font-awesome/css/font-awesome.min.css';
 import 'primeng/resources/primeng.min.css';

import { AppModule } from './app/app.module';
 // import 'primeng/primeng';

// Styles.
// Enables Hot Module Replacement.
declare var module: any;

if (module.hot) {
    module.hot.accept();
}
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//platformBrowserDynamic().bootstrapModule(AppModule);
