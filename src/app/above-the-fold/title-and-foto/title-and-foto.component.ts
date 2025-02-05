import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-title-and-foto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './title-and-foto.component.html',
  styleUrl: './title-and-foto.component.scss'
})
export class TitleAndFotoComponent {

  helloWorld:string = "Hello world";
  textHover:boolean = false;

  changeText() {
    this.helloWorld = "I'M JUSTIN KOLL";
  }

  changeTextBack() {
    this.helloWorld = "Hello world";
  }

}
