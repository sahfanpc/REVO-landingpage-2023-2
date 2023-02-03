import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { CardComponent } from './card/card.component';
import { DesignComponent } from './design/design.component';
import { BuildersComponent } from './builders/builders.component';
import { InstallSectionComponent } from './install-section/install-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CardComponent,
    DesignComponent,
    BuildersComponent,
    InstallSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
