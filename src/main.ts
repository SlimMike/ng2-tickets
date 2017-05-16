import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { ListService } from './app/list/list.service';
import { CommandFactory } from './app/commands/command-factory';
import { Bus } from './app/bus';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [Bus, CommandFactory, ListService]);
