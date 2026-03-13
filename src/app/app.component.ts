import { Component ,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    // Global page title
    this.titleService.setTitle('Rutvi Rathod - Full Stack Developer Portfolio');

    // Global meta tags
    this.metaService.addTags([
      { name: 'description', content: 'Rutvi Rathod | Full Stack Developer specializing in web and mobile applications. Explore projects, skills, and portfolio.' },
      { name: 'keywords', content: 'Rutvi Rathod, Full Stack Developer, Angular, NodeJS, TypeScript, Portfolio' },
      { name: 'author', content: 'Rutvi Rathod' }
    ]);
  }
  }
