import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ImageGalleryComponent } from './admin/image-gallery/image-gallery.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ImageGalleryComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
