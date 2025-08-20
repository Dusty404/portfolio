import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [RouterModule, TranslateModule, NavbarComponent, FooterComponent],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
  }
}