import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoginModule } from './app/login/login.module';
<<<<<<< HEAD
import { NavbarModule } from './app/navbar/navbar.module';
import { SidebarModule} from './app/sidebarAPI/sidebarAPI.module';
=======
import { AppModule } from './app/app.module';
>>>>>>> 22e62e9d8607a02f38336e7741c88f090c3b16ba
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
<<<<<<< HEAD
  .bootstrapModule(LoginModule)
=======

  .bootstrapModule(AppModule)
>>>>>>> 22e62e9d8607a02f38336e7741c88f090c3b16ba
  .catch(err => console.error(err));
