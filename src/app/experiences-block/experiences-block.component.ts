import { Component, OnInit } from '@angular/core';
import { Experience } from './experience/experience.component';

@Component({
  selector: 'app-experiences-block',
  templateUrl: './experiences-block.component.html',
  styleUrls: ['./experiences-block.component.scss']
})
export class ExperiencesBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiences: Array<Experience> = [
    {
      company: "MyTower (Adias)",
      period: "experiences.items.mytower.period",
      location: "experiences.items.mytower.location",
      position: "experiences.items.mytower.title",
      url: "https://www.mytower.fr",
      lines: [
        "experiences.items.mytower.line1",
        "experiences.items.mytower.line2",
        "experiences.items.mytower.line3",
        "experiences.items.mytower.line4",
        "experiences.items.mytower.line5",
        "experiences.items.mytower.line6"
      ]
    },
    {
      company: "Capgemini",
      period: "experiences.items.capgemini.period",
      location: "Sophia-Antipolis (France)",
      position: "experiences.items.capgemini.title",
      url: "https://www.capgemini.com",
      lines: [
        "experiences.items.capgemini.line1",
        "experiences.items.capgemini.line2",
        "experiences.items.capgemini.line3",
        "experiences.items.capgemini.line4",
        "experiences.items.capgemini.line5"
      ]
    },
    {
      company: "Beepeers",
      period: "experiences.items.beepeers.period",
      location: "Sophia-Antipolis (France)",
      position: "experiences.items.beepeers.title",
      url: "http://www.beepeers.com",
      lines: [
        "experiences.items.beepeers.line1",
        "experiences.items.beepeers.line2"
      ]
    },
    {
      company: "experiences.items.self-taught.company",
      lines: [
        "experiences.items.self-taught.line4",
        "experiences.items.self-taught.line3",
        "experiences.items.self-taught.line2",
        "experiences.items.self-taught.line1"
      ]
    },
  ]

}
