import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatTable } from '@angular/material';
import { CandidateService } from 'src/app/services/candidate.service';

export interface Candidate {
	id: number,
	firstname: string;
	lastname: string;
	email: string;
	phone: number;
	dob: Date;
	gender: string;
	status: string;
}

@Component({
	selector: 'app-candidates',
	templateUrl: './candidates.component.html',
	styleUrls: ['./candidates.component.scss']
})


export class CandidatesComponent implements OnInit {

	displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'phone', 'dob', 'gender', 'status', 'options'];
	dataSource: MatTableDataSource<Candidate>;
	page;
	limit;
	paginatorLength;

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatTable, { static: true }) table: MatTable<any>;


	constructor(private route: Router, private candidateService: CandidateService) { }

	async ngOnInit() {
		try {
			const response: any = await this.candidateService.getCandidatesWithPagination(this.page, this.limit);
			console.log(response)
			this.dataSource = new MatTableDataSource(response);
			this.dataSource.paginator = this.paginator;
			// this.paginatorLength = response.data.length;

		} catch (error) {
			throw error;
		}
	}

	showCandidateDetails(id) {
		console.log(id);
		this.route.navigateByUrl(`candidate/${id}`);
	}

	addNewCandidate() {
		this.route.navigateByUrl(`candidate`);
	}

	onRowClicked() {

	}
}
