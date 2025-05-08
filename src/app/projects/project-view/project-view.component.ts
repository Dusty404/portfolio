import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectsDataService } from '../../projects-data.service';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent implements OnInit {

  projectIndex: number = 0;

  constructor(
    public projectsData: ProjectsDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectIndex = +params['id'];
    });
  }

  goBack() {
    this.router.navigate(['/projects']);
  }
}
