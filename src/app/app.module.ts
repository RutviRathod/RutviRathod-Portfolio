import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../componants/home/home.component';
import { EduexpComponent } from '../componants/eduexp/eduexp.component';
import { TechnologyComponent } from '../componants/technology/technology.component';
import { ContactmeComponent } from "../componants/contactme/contactme.component";
import { FooterComponent } from "../componants/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCardComponent } from '../componants/project-card/project-card.component';
import { ProjectsComponent } from '../componants/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,EduexpComponent,TechnologyComponent,ContactmeComponent, FooterComponent, ProjectCardComponent, ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,MatChipsModule,ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/github.svg'));
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/linkedin.svg'));  }
}


