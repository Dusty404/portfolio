import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  aboutMeHover = false;
  skillsHover = false;
  projectsHover = false;
  contactHover = false;
  hoverHeight = 'height: 80px;'
  hoverWidth = 'width: 110px;'
}
