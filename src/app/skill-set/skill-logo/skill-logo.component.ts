import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-logo',
  standalone: true,
  imports: [],
  templateUrl: './skill-logo.component.html',
  styleUrl: './skill-logo.component.scss'
})
export class SkillLogoComponent {

  skillList = [
    {
      name: 'Angular',
      imgSrc: 'angular.png',
    },
    {
      name: 'Rest-Api',
      imgSrc: 'api.png',
    },
    {
      name: 'CSS',
      imgSrc: 'css.png',
    },
    {
      name: 'Firebase',
      imgSrc: 'firebase.png',
    },
    {
      name: 'Git',
      imgSrc: 'git.png',
    },
    {
      name: 'HTML',
      imgSrc: 'html.png',
    },
    {
      name: 'JavaScript',
      imgSrc: 'javascript.png',
    },
    {
      name: 'Material Design',
      imgSrc: 'materialDesign.png',
    },
    {
      name: 'Scrum',
      imgSrc: 'scrum.png',
    },
    {
      name: 'TypeScript',
      imgSrc: 'typescript.png',
    }
  ];
}
