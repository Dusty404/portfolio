import { Component, AfterViewInit } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldComponent, ContactMeComponent, ProjectsComponent, SkillSetComponent, AboutMeComponent, RouterModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    });
  }
}
