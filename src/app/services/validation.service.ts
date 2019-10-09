import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ValidationService {

	constructor() { }

	public firstnamePattern = new RegExp(/^[a-zA-Z]*$/);
	public lastnamePattern = new RegExp(/^[a-zA-Z]*$/);
	public emailPattern = new RegExp(/^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/);
	public adharNumberPattern = new RegExp(/^[0-9]{12}$/);
	public phone = new RegExp(/^[0-9]{10}$/);
	public dob = new RegExp(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
}



