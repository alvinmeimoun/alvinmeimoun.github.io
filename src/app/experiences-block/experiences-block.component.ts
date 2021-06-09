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
        "Implémentation d’algorithmes d’optimisation (type NP et VRP avec OptaPlanner)",
        "Scrum Master, gestion d’équipe Agile, rédaction User Story, configuration Jira",
        "Analyse technico-fonctionnelle des besoins des clients de la solution (tels que Airbus, Chanel)",
        "Développement autonome d’un plugin Outlook destiné à l’extraction et au découpage des pièces jointes (C#, WPF, VSTO)",
        "Gestion des déploiements et intégration continue (Jenkins, Docker, Kubernetes, Gerrit, SonarQube)"
      ]
    },
    {
      company: "Capgemini",
      period: "Mai 2014 - Mars 2018",
      location: "Sophia-Antipolis (France)",
      position: "Ingénieur logiciel",
      url: "https://www.capgemini.com",
      lines: [
        "Développement autonome d’une application iOS, Android, Windows Phone (C#, Java, Swift) pour un organisme de jeux sportifs local à Sophia-Antipolis",
        "Développement d’applications (C#, ASP.NET MVC) et d’une application d’audit sur Android (Java) pour un ascensoriste",
        "Développements sur une solution GDS (Train) dans une équipe Agile (Java, Aria Templates)",
        "TMA pour un système de gestion hôtelière (Java / Struts / .NET WPF / Delphi)",
        "Développement d’un lot d’applications ASP.NET MVC dans une équipe agile ainsi qu’une application tablette Windows 8.1 destiné à la gestion des incidents pour une société de nettoyage"
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
      lines: [
        "2015 : Projet associatif, application de type bibliothèque numérique. Android (Java), iOS (Swift), Angular, Java, Spring, AWS",
        "2013 : Mini-jeu de type Run&Jump réalisé avec libgdx",
        "2012 : Application Android (iControl iTunes) destinée à contrôler iTunes avec une IHM adaptée mobile et tablette",
        "2010 : Application mobile (Stop Cigarette) sur Android et Windows Phone 8.1. Application gagnante (4è position) du concours Nokia – SUPINFO"
      ]
    },
  ]

}
