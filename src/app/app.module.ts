import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtensionRequestListComponent } from './extension-request-list/extension-request-list.component';
import { NewExtensionRequestFormComponent } from './new-extension-request-form/new-extension-request-form.component';
import { RespondExtensionComponent } from './respond-extension/respond-extension.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NewExtensionRequestFormComponent,
    ExtensionRequestListComponent,
    RespondExtensionComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

