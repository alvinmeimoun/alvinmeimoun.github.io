import { Component, OnInit } from '@angular/core';
import { LicenseItem } from './license-item/license-item.component';

@Component({
  selector: 'app-licenses-block',
  templateUrl: './licenses-block.component.html',
  styleUrls: ['./licenses-block.component.scss']
})
export class LicensesBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  academicCurriculum: Array<LicenseItem> = [
    {
      title: "license.items.academic.1.title",
      curriculumPeriod: "2008-2012",
      graduationDate: "2012",
      description: "license.items.academic.1.desc",
      logo: "companies/fr-en.png",
      company: "license.items.academic.1.company",
      location: "Nice, France",
      link: "https://eduscol.education.fr/sti/formations/bac-technologique-sti-genie-electronique-abroge-juin-2012"
    },
    {
      title: "Master Of Science",
      curriculumPeriod: "2012-2017",
      graduationDate: "2017",
      description: "Bac+5",
      logo: "companies/supinfo.png",
      company: "SUPINFO",
      location: "Nice, France",
      link: "https://www.supinfo.com"
    },
  ];

  certifications: Array<LicenseItem> = [
    {
      title: "Mobile & Responsive Web Device",
      graduationDate: "2017",
      logo: "companies/supinfo.png",
      company: "Supinfo",
      link: "http://web.archive.org/web/20160414095744/https://www.supinfo.com/fr/Newsdceadfa8-eaab-45f3-8398-b62c182723bb.aspx"
    },
    {
      title: "OCP Java SE 11 Developer",
      graduationDate: "2021",
      logo: "badge/ocp_javase11dev.png",
      company: "Oracle",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=62439C1720828961FE97D82A3533FB51861FE8853F256F556CC1253EF1A906B1",
      description: "Oracle Certified Professional: Java SE 11 Developer"
    },
  ];

}
