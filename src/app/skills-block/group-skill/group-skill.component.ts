import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-skill',
  templateUrl: './group-skill.component.html',
  styleUrls: ['./group-skill.component.scss']
})
export class GroupSkillComponent implements OnInit {

  @Input()
  group!: GroupSkill;

  constructor() { }

  ngOnInit(): void {
  }

}

export class GroupSkill {
  groupTitle: string;
  skills: Array<string>;

  constructor(groupTitle: string, skills: Array<string>) {
    this.groupTitle = groupTitle;
    this.skills = skills;
  }
}
