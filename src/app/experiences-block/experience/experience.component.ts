import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input()
  experience!: Experience;

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url?: string) {
    if(url) window.open(url, "_blank");
  }
}

export class Experience {
  company!: string;
  period!: string;
  location?: string = "";
  position?: string = "";
  url?: string = "";
  lines?: Array<string> = [];
}