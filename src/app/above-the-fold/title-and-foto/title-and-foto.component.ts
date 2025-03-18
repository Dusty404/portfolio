import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-title-and-foto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './title-and-foto.component.html',
  styleUrl: './title-and-foto.component.scss',
})
export class TitleAndFotoComponent {
  textHover: boolean = false;
  linkedInHover: boolean = false;
  githubHover: boolean = false;
  emailHover:boolean = false;
  titleFirstLine = ['r','o','n','t','e','n','d'];
  titleSecondLine = ['D','E','V','E','L','O','P','E','R']
  fotoTitle: string = "Justin :)"
}
