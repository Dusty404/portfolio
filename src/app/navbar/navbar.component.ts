import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
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

  constructor(private translate: TranslateService) { }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  showMenu() {
    if (!this.openMenu) {
      this.openMenu = true;
    } else {
      this.openMenu = false;
    }
  }
}