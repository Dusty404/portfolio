import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldComponent, ContactMeComponent, ProjectsComponent, SkillSetComponent, AboutMeComponent, RouterModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
