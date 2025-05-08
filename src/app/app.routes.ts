import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'home', component: MainContentComponent },
    { path: 'project/:id', component: ProjectViewComponent },
];
