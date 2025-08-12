import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, RouterModule, TranslateModule],
  templateUrl: './contact-me-form.component.html',
  styleUrl: './contact-me-form.component.scss'
})
export class ContactMeFormComponent {

  constructor(private translate: TranslateService) { }

  http = inject(HttpClient);

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  hoverMid: boolean = false;
  hoverBot: boolean = false;
  placeholderName: string = '';
  placeholderEmail: string = '';
  placeholderMessage: string = '';
  nameValid: boolean = true;
  emailValid: boolean = true;
  messageValid: boolean = true;
  privacyPolicyValid: boolean = true;
  clickedSend: boolean = false;
  nameInput: string = '';
  emailInput: string = '';
  messageInput: string = '';
  emailSent: boolean = false;

  data = {
    name: "",
    email: "",
    message: "",
    isChecked: false,
  }

  ngOnInit() {
    this.setPlaceholders();
    this.translate.onLangChange.subscribe(() => {
      this.setPlaceholders();
    });
  }

  setPlaceholders() {
    this.translate.get([
      'CONTACT_FORM.NAME_PLACEHOLDER',
      'CONTACT_FORM.EMAIL_PLACEHOLDER',
      'CONTACT_FORM.WDYW_PLACEHOLDER'
    ]).subscribe(translations => {
      this.placeholderName = translations['CONTACT_FORM.NAME_PLACEHOLDER'];
      this.placeholderEmail = translations['CONTACT_FORM.EMAIL_PLACEHOLDER'];
      this.placeholderMessage = translations['CONTACT_FORM.WDYW_PLACEHOLDER'];
    });
  }

  checkInputs() {
    this.translate.get([
      'CONTACT_FORM.NAME_ERROR',
      'CONTACT_FORM.EMAIL_ERROR',
      'CONTACT_FORM.WDYW_ERROR'
    ]).subscribe(translations => {

      if (!this.data.name) {
        this.nameValid = false;
        this.placeholderName = translations['CONTACT_FORM.NAME_ERROR'];
      } else {
        this.nameValid = true;
      }

      if (!this.data.email) {
        this.emailValid = false;
        this.placeholderEmail = translations['CONTACT_FORM.EMAIL_ERROR'];
      } else {
        this.emailValid = true;
      }

      if (!this.data.message) {
        this.messageValid = false;
        this.placeholderMessage = translations['CONTACT_FORM.WDYW_ERROR'];
      } else {
        this.messageValid = true;
      }
    });
  }


  post = {
    endPoint: 'https://justin-koll.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.clickedSend = true;
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.data))
        .subscribe({
          next: (response) => {
            this.emailSent = true;
            ngForm.resetForm();
            this.resetTrigger();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
        this.setPlaceholders();
    } else {
      this.checkInputs();
    }
  }

  closePopup() {
    this.emailSent = false;
  }

  resetTrigger() {
    this.nameValid = true;
    this.emailValid = true;
    this.messageValid = true;
    this.clickedSend = false;
  }
}