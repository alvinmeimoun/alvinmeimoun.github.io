import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameBlockComponent } from './name-block/name-block.component';
import { SocialIconComponent } from './name-block/social-icon/social-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NameBlockComponent,
    SocialIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
