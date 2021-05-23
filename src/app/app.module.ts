import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameBlockComponent } from './name-block/name-block.component';
import { SocialIconComponent } from './name-block/social-icon/social-icon.component';
import { LicensesBlockComponent } from './licenses-block/licenses-block.component';
import { LicenseItemComponent } from './licenses-block/license-item/license-item.component';
import { SkillsBlockComponent } from './skills-block/skills-block.component';
import { ProgLangSkillComponent } from './skills-block/prog-lang-skill/prog-lang-skill.component';
import { GroupSkillComponent } from './skills-block/group-skill/group-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NameBlockComponent,
    SocialIconComponent,
    LicensesBlockComponent,
    LicenseItemComponent,
    SkillsBlockComponent,
    ProgLangSkillComponent,
    GroupSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
