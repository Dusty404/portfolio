import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-policy-content',
  imports: [TranslateModule, RouterModule],
  templateUrl: './policy-content.component.html',
  styleUrl: './policy-content.component.scss'
})
export class PolicyContentComponent {
  constructor() {
   try {
    if(window.scrollY == 0) {
      return;
    }
   } catch (error) {}
  }
}
