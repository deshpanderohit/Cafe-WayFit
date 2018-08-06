import { Component } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { NgForm } from '@angular/forms';

import { FormControl, FormGroup, Validators} from '@angular/forms';
import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs-page/tabs-page';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
	login: UserOptions = { username: '', password: '' };
	submitted = false;
	passwordRegex: any = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})';
	user: FormGroup;
	username:'';
	password:'';
	public form: NgForm;


  constructor(public navCtrl: NavController, public http: Http, public toastCtrl: ToastController, public userData: UserData, public loadingCtrl: LoadingController) {

		
   }

 	ngOnInit() {

		this.user = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(4)]),
			password: new FormControl('',Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(20)]))
		});

	}
 
  	userSignup() {
		this.navCtrl.push(SignupPage);
	}


	validateLogin() {
		let data=JSON.stringify({username: this.username, password:this.password});

		this.http.post('http://localhost/ionic/validateLogin.php',data).map(res => res.json()).subscribe(res => {


/*		let loader = this.loadingCtrl.create({
			content: "Authenticating...",
			duration: 300
		});
		loader.present();
*/		
		
		let toast = this.toastCtrl.create({
	      message: 'Welcome '+res.token,
	      duration: 4000
	    });
	    toast.present();

		
		this.userData.login(this.username);
		this.navCtrl.setRoot(TabsPage);

	}, () => {
	
		let toast = this.toastCtrl.create({
      	message: 'Incorrect Username or Password',
      	duration: 4000
    	});
    	toast.present();

	});		
		

	}


 
}
//Validators.pattern(this.passwordRegex)