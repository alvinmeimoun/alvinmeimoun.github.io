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
import { ExperiencesBlockComponent } from './experiences-block/experiences-block.component';
import { ExperienceComponent } from './experiences-block/experience/experience.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LanguageService } from './language.service';

@NgModule({
  declarations: [
    AppComponent,
    NameBlockComponent,
    SocialIconComponent,
    LicensesBlockComponent,
    LicenseItemComponent,
    SkillsBlockComponent,
    ProgLangSkillComponent,
    GroupSkillComponent,
    ExperiencesBlockComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
