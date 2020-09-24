import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadetareaComponent } from './listadetarea/listadetarea.component';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [AppComponent, ListadetareaComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DialogModule,
		BrowserAnimationsModule,
		ButtonModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
