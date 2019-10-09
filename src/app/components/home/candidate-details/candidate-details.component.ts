import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-candidate-details',
	templateUrl: './candidate-details.component.html',
	styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {
	candidate;
	constructor(private candidateService: CandidateService, private activatedRoute: ActivatedRoute, private location: Location) { }

	async ngOnInit() {
		let id = this.activatedRoute.snapshot.paramMap.get('id')
		this.candidate = await this.candidateService.getCandidate(id);
	}

	goBack() {
		this.location.back();
	}

}
