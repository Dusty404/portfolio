import { Component, AfterViewInit, NgZone } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldComponent, ContactMeComponent, ProjectsComponent, SkillSetComponent, AboutMeComponent, RouterModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})

export class MainContentComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute, private ngZone: NgZone, private router: Router, private location: Location) { }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
      if (fragment) {
          setTimeout(() => {
          const el = document.getElementById(fragment);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              this.location.replaceState(this.router.url.split('#')[0]);
            }
          }, 100);
      }
    });
  }
}