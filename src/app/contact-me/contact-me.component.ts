import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { ContactMeFormComponent } from "./contact-me-form/contact-me-form.component";
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-contact-me',
    imports: [CommonModule, FormsModule, ContactMeFormComponent, FooterComponent, RouterModule, TranslateModule],
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  hoverMid:boolean = false;
  hoverBot:boolean = false;
  isChecked:boolean = false;

  constructor(private translate: TranslateService) { }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
