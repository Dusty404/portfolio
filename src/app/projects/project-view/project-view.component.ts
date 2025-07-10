import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectsDataService } from '../../projects-data.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule, TranslateModule],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent implements OnInit {

  projectIndex: number = 0;

  constructor(public projectsData: ProjectsDataService,
    private route: ActivatedRoute,
    private router: Router, private projectService: ProjectsDataService,
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
    this.route.params.subscribe(params => {
      this.projectIndex = +params['id'];
    });
    const lang = (this.translate.currentLang || 'de') as 'de' | 'en';
    this.projects = this.projectService.getProjects(lang);
  
    this.translate.onLangChange.subscribe((event) => {
      this.projects = this.projectService.getProjects(event.lang as 'de' | 'en');
    });
  }
  
    switchLanguage(lang: string) {
      this.translate.use(lang);
    }

  goBack() {
    this.router.navigate(['/projects']);
  }

  goToNextProject() {
    console.log(this.projectIndex)
    if(this.projectIndex == this.projectsData.projectsArray.length - 1) {
      this.projectIndex = 0;
    } else {
      this.projectIndex = this.projectIndex +1;
    }
   this.router.navigate(['project/'+ this.projectIndex])
   console.log(this.projectIndex)
}

}
