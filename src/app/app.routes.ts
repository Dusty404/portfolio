import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'home', component: MainContentComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'project/:id', component: ProjectViewComponent },
];
