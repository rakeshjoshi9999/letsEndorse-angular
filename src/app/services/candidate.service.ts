import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CandidateService {

	constructor(private http: HttpClient) { }

	public async getCandidatesWithPagination(page?, limit?, role?) {
		try {
			const response = await this.http.get(environment.apiUrl + `/candidates`).toPromise();
			return response;
		} catch (error) {
			throw error;
		}
	}

	public async getCandidate(id) {
		try {
			const response = await this.http.get(environment.apiUrl + '/candidate/' + id).toPromise();
			console.log(response)
			return response;
		} catch (error) {
			throw error;
		}
	}


	public async addCandidate(user) {
		try {
			const response = await this.http.post(environment.apiUrl + '/candidate', user).toPromise();
			console.log(response);
			return response;
		} catch (error) {
			throw error;
		}
	}

	async editCandidate(id, body) {
		try {
			const response = await this.http.put(environment.apiUrl + '/candidate/' + id, body).toPromise();
			return response;
		} catch (error) {
			throw error;
		}
	}

}
