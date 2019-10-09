import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { CandidatesComponent } from './components/home/candidates/candidates.component';
import { CandidateService } from './services/candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { CandidateDetailsComponent } from './components/home/candidate-details/candidate-details.component';
import { AddCandidateComponent } from './components/home/add-candidate/add-candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from './services/validation.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		CandidatesComponent,
		CandidateDetailsComponent,
		AddCandidateComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [CandidateService,
		ValidationService],
	bootstrap: [AppComponent]
})
export class AppModule { }
