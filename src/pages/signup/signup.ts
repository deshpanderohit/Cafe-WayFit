import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage implements OnInit {
	mob: any;
	email: any;
	cpassword: any;
	name: any;
	password: any;
	username: any;
	memid: any;
	member: FormGroup;
	signup: string;

//  signup: UserOptions = { username: '', password: '' };
 	submitted = false;
	user: FormGroup;


  constructor(public navCtrl: NavController, public userData: UserData, public http: Http) {
	this.signup="gmembers";
}

	ngOnInit() {

	this.user = new FormGroup({

	memid: new FormControl('', [Validators.required]),
	name: new FormControl('', [Validators.required, Validators.minLength(4)]),
	password: new FormControl('', [Validators.required]),
	re_password: new FormControl('', [Validators.required,this.equalto('password')])

	});

	this.member = new FormGroup({

	name: new FormControl('', [Validators.required]),
	username: new FormControl('', [Validators.required, Validators.minLength(4)]),
	email: new FormControl('', [Validators.required,Validators.email]),
	mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
	password: new FormControl('', [Validators.required]),
	re_password: new FormControl('', [Validators.required,this.equalto('password')])
	});

	}

	equalto(field_name): ValidatorFn {
		return (control: AbstractControl): {[key: string]: any} => {

		let input = control.value;

		let isValid=control.root.value[field_name]==input
		if(!isValid) 
		return { 'equalTo': {isValid} }
		else 
		return null;
		};
	}


	mregister() {
		let data=JSON.stringify({memid: this.memid, username: this.username, password:this.password, cpassword:this.cpassword});

		this.http.post('http://localhost/api/product/gym_signup.php',data).map(res => res.json()).subscribe(res => {alert("success: Userid "+res.userid+" Access Token "+res.token);}, () => {alert("failed");});		
	
	}


	newmregister() {
		let data=JSON.stringify({name: this.name, username: this.username, email: this.email, mobile: this.mob, password:this.password, cpassword:this.cpassword});

		this.http.post('http://localhost/ionic/validateLogin.php',data).map(res => res.json()).subscribe(res => {alert("success: Userid "+res.userid+" Access Token "+res.token);}, () => {alert("failed");});		
	
	}
}

