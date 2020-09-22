import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadetareaComponent } from './listadetarea/listadetarea.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
	declarations: [AppComponent, ListadetareaComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DialogModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
