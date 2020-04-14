import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoginModule } from './app/login/login.module';
import { AppModule } from './app/app.module';
import {SidebarModule} from './app/sidebarAPI/sidebarAPI.module';
import {NavbarModule} from './app/navbar/navbar.module';
import { environment } from './environments/environment';
import {DiscussionModule} from './app/discussion/discussion.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(LoginModule)
  .catch(err => console.error(err));

  
