import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ListFormComponent } from './list-form/list-form.component';
import { Bus } from './bus';

// @todo not sure if that's right way of making a provider
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Bus],
  bootstrap: [AppComponent]
})
export class AppModule { }
