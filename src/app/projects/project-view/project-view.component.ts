import { Component, inject, Input } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ProjectsDataService } from '../../projects-data.service';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent {

  projectsData = inject(ProjectsDataService);
}
