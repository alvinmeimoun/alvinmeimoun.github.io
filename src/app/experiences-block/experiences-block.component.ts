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
      period: "Mars 2018 - Aujourd'hui",
      location: "Casablanca (Maroc)",
      position: "Ingénieur étude et développement",
      url: "https://www.mytower.fr",
      lines: [
        "Développeur et leader technique sur la solution MyTower (Angular, Spring)",
        "Implémentation d'algorithmes d'optimisation (type NP et VRP avec OptaPlanner)",
        "Scrum Master, gestion d'équipe Agile, rédaction UserStory",
        "Analyse technico-fonctionnelle des besoins des clients de la solution (tels que Airbus, Chanel)"
      ]
    },
    {
      company: "Capgemini",
      period: "Mai 2014 - Mars 2018",
      location: "Sophia-Antipolis (France)",
      position: "Ingénieur logiciel",
      url: "https://www.capgemini.com",
      lines: [
        "Développeur sur plusieurs projets (Web, iOS, Android,Windows) dans des contextes Agile, Waterfall ou autonome",
        "Développements sur une solution GDS (Train) dans une équipe Agile",
        "TMA pour un système de gestion hôtelière"
      ]
    },
    {
      company: "Beepeers",
      period: "Mai 2013, Mai 2014",
      location: "Sophia-Antipolis (France)",
      position: "Développeur Android",
      url: "http://www.beepeers.com",
      lines: [
        "Implémentation du framework Android (propriétaire Beepeers)",
        "Intégration (implémentation design spécifique et paramétrage des modules achetés par les clients)"
      ]
    },
    {
      company: "Expérience Autodidacte",
      period: "2010 - 2013",
      lines: [
        "Application mobile (Stop Cigarette) sur Android et Windows Phone 8,1. Application gagnante (4è position) du concours Nokia - SUPINFO 2012",
        "Application Android (iControl iTunes) destinée à contrôler iTunes avec une IHM adaptée mobile et tablette",
        "Mini-jeu du type Run&Jump réalisé avec libgdx"
      ]
    },
  ]

}
