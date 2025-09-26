import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { filter } from 'rxjs/operators';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-main-content',
    standalone: true,
    imports: [AboveTheFoldComponent, ContactMeComponent, ProjectsComponent, SkillSetComponent, AboutMeComponent, RouterModule],
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit, OnDestroy {
    
    private destroy$ = new Subject<void>(); 

    constructor(private route: ActivatedRoute, private router: Router) { } 

    ngOnInit(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.handleFragmentScroll();
        });
        this.handleFragmentScroll();
    }
    
    private handleFragmentScroll(): void {
        const fragment = this.route.snapshot.fragment;
        
        if (fragment) {
            const scrollToFragment = () => {
                const el = document.getElementById(fragment);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };
            setTimeout(scrollToFragment, 0); 
        }
    }
    
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}