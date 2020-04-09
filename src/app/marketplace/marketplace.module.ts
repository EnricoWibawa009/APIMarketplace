import { NgModule } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
    imports: [],
    declarations: [FooterComponent,
        HeaderComponent,
        DashboardComponent,
        NavbarComponent],
    bootstrap: []
})
export class MarketplaceModule {
    hide = true;

}