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
  aboutMeHover:boolean = false;
  skillsHover:boolean = false;
  projectsHover:boolean = false;
  contactHover:boolean = false;
  hoverHeight:string = 'height: 80px;'
  hoverWidth:string = 'width: 110px;'
  color = "white"
}
