import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me-form.component.html',
  styleUrl: './contact-me-form.component.scss'
})
export class ContactMeFormComponent {

  hoverMid:boolean = false;
  hoverBot:boolean = false;
  isChecked:boolean = false;
  placeholderName:string = "Your name goes here";
  placeholderEmail:string = "youremail@email.com";
  placeholderMessage:string = "Hello Justin, I am interested in...";
  nameValid:boolean = true;
  emailValid:boolean = true;
  messageValid:boolean = true;

  data = {
    name: "",
    email: "",
    message: ""
  }

   sendEmail(ngForm:NgForm ) {
    if(ngForm.valid && ngForm.submitted) {
      console.log(this.data)
    } else {
      this.checkInputs()
    }
  }

  checkInputs() {
    if(!this.data.name) {
      this.nameValid = false;
      this.placeholderName = "Oops! it seems your name is missing"
    }
    if(!this.data.email) {
      this.emailValid = false;
      this.placeholderEmail = "Hoppla! your email is required"
    }
    if(!this.data.message) {
      this.messageValid = false;
      this.placeholderMessage = "What do you need to develop?"
    }
  }

  /**

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
    */
}