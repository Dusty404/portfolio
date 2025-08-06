import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'aboutMe', component: MainContentComponent },
    { path: 'skills', component: MainContentComponent },
    { path: 'contact', component: MainContentComponent },
    { path: 'projects', component: MainContentComponent },
    { path: 'project/:id', component: ProjectViewComponent },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent },
    { path: 'legalNotice', component: LegalNoticeComponent },
];
