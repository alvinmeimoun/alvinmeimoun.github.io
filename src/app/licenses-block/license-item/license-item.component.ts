import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-license-item',
  templateUrl: './license-item.component.html',
  styleUrls: ['./license-item.component.scss']
})
export class LicenseItemComponent implements OnInit {

  @Input()
  data!: LicenseItem;

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url?: string) {
    if(url) window.open(url, "_blank");
  }
}

export class LicenseItem {
  title: string = "";
  curriculumPeriod?: string;
  graduationDate: string = ""
  description?: string;
  logo?: string;
  location?: string;
  company: string = "";
  link?: string;
}
