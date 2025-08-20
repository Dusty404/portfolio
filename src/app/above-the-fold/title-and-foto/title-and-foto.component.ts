import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-title-and-foto',
    imports: [FormsModule, CommonModule, TranslateModule, RouterModule],
    templateUrl: './title-and-foto.component.html',
    styleUrl: './title-and-foto.component.scss'
})
export class TitleAndFotoComponent {
  textHover: boolean = false;
  linkedInHover: boolean = false;
  githubHover: boolean = false;
  emailHover: boolean = false;
  titleFirstLine = ['r', 'o', 'n', 't', 'e', 'n', 'd'];
  titleSecondLine = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R']
  fotoTitle: string = "Justin :)";
  photoHover: boolean = false;

  constructor(private translate: TranslateService) { }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  changePhotoTextMouseIn() {
    this.fotoTitle = "Justin :D"
  }
  changePhotoTextMouseOut() {
    this.fotoTitle = "Justin :)"
  }
}
