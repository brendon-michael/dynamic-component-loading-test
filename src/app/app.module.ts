import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { DynamicHTMLModule } from './dynamic-html';

@NgModule({
  declarations: [AppComponent, TestingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicHTMLModule.forRoot({
      components: [{ component: TestingComponent, selector: 'app-testing' }]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
