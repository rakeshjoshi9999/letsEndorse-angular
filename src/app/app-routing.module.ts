import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CandidateDetailsComponent } from './components/home/candidate-details/candidate-details.component';
import { AddCandidateComponent } from './components/home/add-candidate/add-candidate.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'candidate/:id', component: CandidateDetailsComponent },
	{ path: 'candidate', component: AddCandidateComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
