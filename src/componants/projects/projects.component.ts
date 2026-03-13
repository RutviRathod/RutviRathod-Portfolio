import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'ATS System',
      description: 'An ATS web app streamlines recruitment by automating job postings, resume parsing, and candidate tracking. It offers features like keyword filtering, interview scheduling, and communication tools, enhancing hiring efficiency and ensuring compliance. Ideal for HR teams seeking to optimize their talent acquisition process.',
      imageUrl: '../../assets/appoint-meet.png',
      technology: [{
        name: 'Angular'},{
        name: 'Typescript'},{
        name: 'REST Apis'},{
        name: 'Stripe'},{
        name: 'Javascript'},{
        name: 'NodeJs'},{
        name: 'MySQL'},{
        name: 'Git'},{
        name: 'Postman'},{
        name: 'Azure'},{
        name: 'Third party APIs'
        }]
    },
    {
      title: 'Mini DNS API',
      description: 'A Mini DNS Server is a lightweight application that resolves domain names to IP addresses within a local network.'+ 
      'It handles DNS queries, supports basic record types (A, CNAME, MX), and provides caching for improved performance.' +
      'it enhances network efficiency by managing local DNS resolution.',
      imageUrl: '../../assets/DNS API image.png',
      technology: [{
        name: 'Typescript'},{
          name: 'HTML'},{
          name: 'CSS'},{
          name: 'Javascript'},{
          name: 'NodeJs'},{
          name: 'MySQL'},{
          name: 'Git'},{
          name: 'Postman'}]
        
    },
    {
      title: 'Career Cloud',
      description: 'A Career Cloud is an online platform that connects job seekers with employers, offering features like job listings and application tracking.' +
      'It streamlines efficient job search and recruitment processes.' +
      'Ideal for individuals seeking career growth and organizations looking to attract talent.',
      imageUrl: '../../assets/Careercloud image.png',
      technology: [{
        name: '.net'},{
          name: 'MVC'},{
          name: 'Entity Framework',},{
          name: 'HTML'},{
          name: 'CSS'},{
          name: 'Javascript'},{
          name: 'C#'},{
          name: 'LINQ'},{
          name: 'Git'},{
          name: 'Microsoft SQL Server'}]
        
    }
  ];
  ;

  constructor() { }

  ngOnInit() {
  }

}

