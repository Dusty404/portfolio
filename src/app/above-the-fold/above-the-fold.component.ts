import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TitleAndFotoComponent } from "./title-and-foto/title-and-foto.component";

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [NavbarComponent, TitleAndFotoComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

}
