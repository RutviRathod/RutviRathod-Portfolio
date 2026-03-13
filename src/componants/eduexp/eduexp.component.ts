import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eduexp',
  templateUrl: './eduexp.component.html',
  styleUrls: ['./eduexp.component.css']
})
export class EduexpComponent implements OnInit {

  public timelineItems = [
    {
      title: 'Computer Programmer',
      organization: 'TDT Technologies',
      date: 'Aug 2024 - Nov 2024',
      icon: 'code'
    },
    {
      title: 'Software Developer',
      organization: 'VGD Technologies',
      date: 'Jan 2022 - June 2023',
      icon: 'code'
    },
    {
      title: 'Software Developer Intern',
      organization: 'VGD Technologies',
      date: 'Dec 2020 - Dec 2021',
      icon: 'code'
    },
    {
      title: 'B.E. in Computer Engineering',
      organization: 'GTU',
      date: 'July 2014 - May 2018',
      icon: 'school'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
