import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prog-lang-skill',
  templateUrl: './prog-lang-skill.component.html',
  styleUrls: ['./prog-lang-skill.component.scss']
})
export class ProgLangSkillComponent implements OnInit {

  @Input()
  name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
