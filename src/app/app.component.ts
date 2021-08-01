import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public languageService: LanguageService) {

  }

  ngOnInit(): void {
    this.languageService.applyDefaultLang();
  }

  title = 'Alvin MEIMOUN';
}
