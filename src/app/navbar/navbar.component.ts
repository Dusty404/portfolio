import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslateModule, MatSelectModule, MatFormFieldModule, MatButtonToggleModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  aboutMeHover: boolean = false;
  skillsHover: boolean = false;
  projectsHover: boolean = false;
  contactHover: boolean = false;
  hoverHeight: string = 'height: 80px;'
  hoverWidth: string = 'width: 110px;'
  color = "white"
  openMenu: boolean = false;

  constructor(private translateService: TranslateService) { }

  currentLang = this.translateService.currentLang || 'de';

switchLanguage(lang: string) {
  this.translateService.use(lang);
  this.currentLang = lang;
}

  showMenu() {
    if (!this.openMenu) {
      this.openMenu = true;
    } else {
      this.openMenu = false;
    }
  }
}