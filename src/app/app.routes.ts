import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'goBack', component: MainContentComponent },
    { path: 'project/:id', component: ProjectViewComponent },
    { path: 'projects', component: MainContentComponent },
];
