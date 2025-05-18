import { Component } from '@angular/core';
import { SkillLogoComponent } from "./skill-logo/skill-logo.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [SkillLogoComponent, FormsModule, CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
}
