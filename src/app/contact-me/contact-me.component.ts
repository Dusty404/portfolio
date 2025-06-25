import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { ContactMeFormComponent } from "./contact-me-form/contact-me-form.component";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, ContactMeFormComponent, FooterComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  hoverMid:boolean = false;
  hoverBot:boolean = false;
  isChecked:boolean = false;
}
