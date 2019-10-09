import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { Location } from '@angular/common';
import { source } from '../../../core/source';
import { gender } from '../../../core/gender';
import { sourceType } from '../../../core/sourceType';
import { employementStatus } from '../../../core/employementStatus';
import { occupation } from '../../../core/occupation';
import { qualification } from '../../../core/qualification';
import { annualIncome } from '../../../core/annualincome';
import { status } from '../../../core/status';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { from } from 'rxjs';




@Component({
	selector: 'app-add-candidate',
	templateUrl: './add-candidate.component.html',
	styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {
	form: FormGroup;
	sources = source;
	genders = gender;
	sourceTypes = sourceType;
	employementStatuses = employementStatus;
	occupations = occupation;
	qualifications = qualification;
	annualIncomes = annualIncome;
	statuses = status;

	constructor(private formBuilder: FormBuilder, private candidateService: CandidateService, private validationService: ValidationService, private location: Location, private route: Router) { }

	ngOnInit() {
		this.form = this.formBuilder.group({
			firstname: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.validationService.firstnamePattern)])),
			lastname: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.validationService.lastnamePattern)])),
			email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.validationService.emailPattern)])),
			adharNumber: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.validationService.adharNumberPattern)])),
			phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.validationService.phone)])),
			alternatePhone: new FormControl('', Validators.compose([Validators.pattern(this.validationService.phone)])),
			dob: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.validationService.dob)])),
			source: new FormControl('', Validators.required),
			sourceType: new FormControl('', Validators.required),
			employementStatus: new FormControl('', Validators.required),
			occupation: new FormControl('', Validators.required),
			qualification: new FormControl('', Validators.required),
			hasBankAccount: new FormControl('', Validators.required),
			needsTraining: new FormControl('', Validators.required),
			successfulEnterprises: new FormControl('', Validators.required),
			failedEnterprises: new FormControl('', Validators.required),
			address1: new FormControl(''),
			address2: new FormControl(''),
			city: new FormControl(''),
			district: new FormControl(''),
			state: new FormControl(''),
			country: new FormControl(''),
			gender: new FormControl('', Validators.required),
			annualIncome: new FormControl('', Validators.required),
			hasAssets: new FormControl('', Validators.required),
			status: new FormControl('', Validators.required)
		});
	}

	public hasError = (controlName: string, errorName: string) => {
		return this.form.controls[controlName].hasError(errorName);
	}

	async save() {
		let formValue = this.form.value;
		let body = {
			adharNumber: formValue.adharNumber,
			firstName: formValue.firstname,
			lastName: formValue.lastname,
			email: formValue.email,
			phone: formValue.phone,
			alternatePhone: formValue.alternatePhone,
			dob: formValue.dob,
			source: formValue.source,
			sourceType: formValue.sourceType,
			employementStatus: formValue.employementStatus,
			occupation: formValue.occupation,
			qualification: formValue.qualification,
			hasBankAccount: formValue.hasBankAccount,
			hasAssets: formValue.hasAssets,
			needsTraining: formValue.needsTraining,
			successfulEnterprises: formValue.successfulEnterprises,
			failedEnterprises: formValue.failedEnterprises,
			gender: formValue.gender,
			annualIncome: formValue.annualIncome,
			status: formValue.status,
			address: {
				address1: formValue.address1,
				address2: formValue.address2,
				city: formValue.city,
				district: formValue.district,
				state: formValue.state,
				country: formValue.country
			}
		}
		if (!this.form.invalid) {
			try {
				console.log("dsf", this.form.value);
				const response: any = await this.candidateService.addCandidate(body);
				console.log(response);
				this.route.navigateByUrl('/');
			} catch (error) {
				console.log(error);
			}
		}
	}

	cancel() {
		this.location.back()

	}
}
