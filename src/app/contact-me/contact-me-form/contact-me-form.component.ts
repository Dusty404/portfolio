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
      this.checkNameInput()
    }
  }

  checkNameInput() {
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

}


