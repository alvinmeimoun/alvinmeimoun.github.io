import { Component, OnInit } from '@angular/core';
import { GroupSkill } from './group-skill/group-skill.component';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.scss']
})
export class SkillsBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills: Array<GroupSkill> = [
    {
      groupTitle: "Spring",
      skills: ["Boot", "Data", "Security"]
    },
    {
      groupTitle: ".NET",
      skills: ["ASP.NET MVC", "UWP", "Xamarin", "WPF", "Office", "Entity Framework"]
    },
    {
      groupTitle: "Mobile",
      skills: ["Android (Java)", "iOS (Swift + UIKit)", "Windows Phone"]
    },
    {
      groupTitle: "Test",
      skills: ["JUnit", "NUnit", "Selenium", "Mockito", "REST Assured"]
    },
    {
      groupTitle: "Qualité",
      skills: ["Jenkins", "SonarQube"]
    },
    {
      groupTitle: "SGBD",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"]
    },
    {
      groupTitle: "Web",
      skills: ["Angular", "CSS3", "jQuery", "Aria Templates"]
    },
    {
      groupTitle: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "Linux", "Windows Server"]
    },
    {
      groupTitle: "Intelligence Artificielle",
      skills: ["OptaPlanner"]
    },
    {
      groupTitle: "Outils Projet",
      skills: ["JIRA Software", "Gerrit", "Git"]
    },
  ];

}
