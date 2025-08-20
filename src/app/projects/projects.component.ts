import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsDataService } from '../projects-data.service';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-projects',
    imports: [FormsModule, CommonModule, RouterModule, TranslateModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectsDataService,
    private translate: TranslateService) { }
  projects: {
    title: string;
    discription: string;
    implementationDetails?: string;
    duration?: string;
    imgSrc: string;
    usedTechnologies?: { technologieName: string; technologieIcon: string }[];
  }[] = [];

ngOnInit() {
  const lang = (this.translate.currentLang || 'de') as 'de' | 'en';
  this.projects = this.projectService.getProjects(lang);

  this.translate.onLangChange.subscribe((event) => {
    this.projects = this.projectService.getProjects(event.lang as 'de' | 'en');
  });
}

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  animationStop: boolean = false;
  imgZoom: boolean = false;

  projectsData = inject(ProjectsDataService);
}