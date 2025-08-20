import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
    selector: 'app-legal-notice',
    standalone: true,
    imports: [RouterModule, TranslateModule, NavbarComponent, FooterComponent],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
