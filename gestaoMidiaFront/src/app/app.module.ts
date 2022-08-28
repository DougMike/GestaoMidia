import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediasComponent } from './core/medias/medias/medias.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './shared/nav-bar/footer/footer.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MediasComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
