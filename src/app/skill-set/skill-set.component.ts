import { Component } from '@angular/core';
import { SkillLogoComponent } from "./skill-logo/skill-logo.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-skill-set',
    imports: [SkillLogoComponent, FormsModule, CommonModule, TranslateModule],
    templateUrl: './skill-set.component.html',
    styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  constructor(private translate: TranslateService) { }
  
    switchLanguage(lang: string) {
      this.translate.use(lang);
    }
}
