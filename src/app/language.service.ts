import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  static KEY_STORED_LANG = "language";

  constructor(private translate: TranslateService) {

  }

  public changeLang(newLang: string) {
    if(newLang == null) {
      console.warn("Trying to set null language");
    }

    this.translate.use(newLang);
    localStorage.setItem(LanguageService.KEY_STORED_LANG, newLang);
  }

  public applyDefaultLang() {
    this.translate.setDefaultLang("en");

    if(this.getSelectedLang() != null) {
      this.translate.use(this.getSelectedLang()!);
    }
  }

  public getSelectedLang() : string | null {
    if(this.getStoredLang() != null) {
      return this.getStoredLang()!;
    }

    if(this.getBrowserLang() != null) {
      return this.getBrowserLang()!.substring(0,2).toLowerCase();
    }

    return null;
  }

  private getStoredLang() : string | undefined | null {
    return localStorage.getItem(LanguageService.KEY_STORED_LANG);
  }

  private getBrowserLang() : string | undefined | null {
    return navigator.languages ? navigator.languages[0] : (navigator.language);
  }
}
