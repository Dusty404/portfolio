import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-logo.component.html',
  styleUrl: './skill-logo.component.scss'
})
export class SkillLogoComponent {

  stickerImgSrc: string ="../../../assets/img/skill-set-section/basic.png"
  stickerPeel: boolean = false;
  stickerPeeled: boolean = false;
  stickerText: boolean = false;

  peelSticker() {
    this.stickerImgSrc="../../../assets/img/skill-set-section/pull.png"
    setTimeout(() => {
      this.stickerPeel = true;
      this.stickerPeeled = true;
    }, 50);
  };

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
