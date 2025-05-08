import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { AbouteMeComponent } from '../aboute-me/aboute-me.component';
import { ProjectViewComponent } from '../projects/project-view/project-view.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldComponent, ContactMeComponent, ProjectsComponent, SkillSetComponent, AbouteMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
