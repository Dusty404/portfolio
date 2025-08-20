import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-about-me',
    imports: [CommonModule, TranslateModule, RouterModule],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(private translate: TranslateService) { }
  
    switchLanguage(lang: string) {
      this.translate.use(lang);
    }
}
