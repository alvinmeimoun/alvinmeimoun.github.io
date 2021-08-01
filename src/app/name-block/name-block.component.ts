import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-name-block',
  templateUrl: './name-block.component.html',
  styleUrls: ['./name-block.component.scss']
})
export class NameBlockComponent implements OnInit {

  constructor(public languageService: LanguageService) {

  }

  ngOnInit(): void {
  }

}
