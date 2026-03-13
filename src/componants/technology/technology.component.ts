import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {


  technologyList = [
    { name: 'HTML', icon: 'assets/icons/html5.svg' },
    { name: 'CSS', icon: 'assets/icons/css3.svg' },
    { name: 'Mongodb', icon: 'assets/icons/mongodb-icon.svg' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'Typescript', icon: 'assets/icons/icons8-typescript.svg' },
    { name: 'Angular', icon: 'assets/icons/icons8-angularjs.svg' },
    { name: 'NodeJS', icon: 'assets/icons/icons8-nodejs.svg' },
    { name: 'Azure', icon: 'assets/icons/azure.svg' },
    { name: 'Git', icon: 'assets/icons/icons8-git.svg' },
    { name: 'Postman', icon: 'assets/icons/icons8-postman-api.svg' },
    { name: 'Docker', icon: 'assets/icons/icons8-docker-100.svg' },
    { name: 'C#', icon: 'assets/icons/icons8-c-sharp-logo.svg' },
    { name: '.Net', icon: 'assets/icons/icons8-.net-framework.svg' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
