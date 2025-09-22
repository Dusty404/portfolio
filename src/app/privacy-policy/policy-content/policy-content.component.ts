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
ngAfterViewInit(): void {
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
  }
}
