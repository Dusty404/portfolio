import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    imports: [CommonModule, RouterModule, TranslateModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

    hover:boolean = false;
    gitHover:boolean = false;
    linkeInHover:boolean = false;
    mailHover:boolean = false;
}
