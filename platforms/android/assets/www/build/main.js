webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_page_tabs_page__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, http, toastCtrl, userData, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.login = { username: '', password: '' };
        this.submitted = false;
        this.passwordRegex = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})';
    }
    LoginPage.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(4)]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern(this.passwordRegex)]))
        });
    };
    LoginPage.prototype.userSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.validateLogin = function () {
        var _this = this;
        var data = JSON.stringify({ username: this.username, password: this.password });
        this.http.post('http://localhost/ionic/validateLogin.php', data).map(function (res) { return res.json(); }).subscribe(function (res) {
            /*		let loader = this.loadingCtrl.create({
                        content: "Authenticating...",
                        duration: 300
                    });
                    loader.present();
            */
            var toast = _this.toastCtrl.create({
                message: 'Welcome ' + res.token,
                duration: 4000
            });
            toast.present();
            _this.userData.login(_this.username);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_page_tabs_page__["a" /* TabsPage */]);
        }, function () {
            var toast = _this.toastCtrl.create({
                message: 'Incorrect Username or Password',
                duration: 4000
            });
            toast.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/root/temp/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<!--	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic logo">\n	</div>\n-->\n<form novalidate #loginForm="ngForm" [formGroup]="user">\n\n<ion-item>\n<ion-label floating>Username</ion-label>\n<ion-input type="text" [(ngModel)]="username" value="" formControlName="name"></ion-input>\n</ion-item>\n\n<ion-item no-lines *ngIf="( user.get(\'name\').hasError(\'minlength\') || user.get(\'name\').hasError(\'required\') ) && user.get(\'name\').touched">\n\n<div class="error" *ngIf="user.get(\'name\').hasError(\'required\') && user.get(\'name\').touched">\nPlease enter your username\n</div>\n<div class="error" *ngIf="user.get(\'name\').hasError(\'minlength\') && user.get(\'name\').touched">\nMinimum of 4 characters\n</div>\n</ion-item>\n\n\n\n<ion-item>\n<ion-label floating>Password</ion-label>\n<ion-input type="password" [(ngModel)]="password" value="" formControlName="password"></ion-input>\n</ion-item>\n\n<ion-item no-lines *ngIf="( user.get(\'password\').hasError(\'required\') || user.get(\'password\').hasError(\'minlength\') || user.get(\'password\').hasError(\'maxlength\'))&& user.get(\'password\').touched">\n\n<div class="error" *ngIf="user.get(\'password\').hasError(\'required\') && user.get(\'password\').touched">\nPlease enter your password\n</div>\n<div class="error" *ngIf="user.get(\'password\').hasError(\'minlength\') && user.get(\'password\').touched">\nPassword must contain at least 4 characters\n</div>\n\n<div class="error" *ngIf="user.get(\'password\').hasError(\'maxlength\') && user.get(\'password\').touched">\nMaximum password length is 20\n</div>\n</ion-item>\n\n\n<div padding>\n<button ion-button full [disabled]="user.invalid" (click)="validateLogin()">Login</button>\n</div>\n</form>\n\n<div padding>\n	<p class="gray" align="center">New to WayFit?</p>\n	<button ion-button full (click)="userSignup()">Register Now!</button>\n</div>\n\n\n\n</ion-content>\n\n\n<style type="text/css">\n.error\n{\ncolor:red;\nfont-size:12px;\n}\n</style>\n'/*ion-inline-end:"/root/temp/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(navCtrl, userData, http) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.http = http;
        //  signup: UserOptions = { username: '', password: '' };
        this.submitted = false;
        this.signup = "gmembers";
    }
    SignupPage.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            memid: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            re_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.equalto('password')])
        });
        this.member = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]),
            mob: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            re_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.equalto('password')])
        });
    };
    SignupPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    SignupPage.prototype.mregister = function () {
        var data = JSON.stringify({ memid: this.memid, username: this.username, password: this.password, cpassword: this.cpassword });
        this.http.post('http://localhost/ionic/validateLogin.php', data).map(function (res) { return res.json(); }).subscribe(function (res) { alert("success: Userid " + res.userid + " Access Token " + res.token); }, function () { alert("failed"); });
    };
    SignupPage.prototype.newmregister = function () {
        var data = JSON.stringify({ name: this.name, username: this.username, email: this.email, mobile: this.mob, password: this.password, cpassword: this.cpassword });
        this.http.post('http://localhost/ionic/validateLogin.php', data).map(function (res) { return res.json(); }).subscribe(function (res) { alert("success: Userid " + res.userid + " Access Token " + res.token); }, function () { alert("failed"); });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/root/temp/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n		      <ion-icon name="menu"></ion-icon>\n		</button>\n		\n		<ion-title>User Registration</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n<div>\n	<ion-segment [(ngModel)]="signup">\n	    <ion-segment-button value="gmembers">\n			Gym Members\n	    </ion-segment-button>\n\n	    <ion-segment-button value="newusers">\n		    New Users\n	    </ion-segment-button>\n	  </ion-segment>\n</div>\n\n<div padding [ngSwitch]="signup">\n	<ion-list *ngSwitchCase="\'gmembers\'">\n\n	<form novalidate [formGroup]="user">\n\n		<ion-item>\n			<ion-label floating>Membership ID</ion-label>\n			<ion-input type="text" value="" formControlName="memid"></ion-input>\n		</ion-item>\n\n		<ion-item no-lines *ngIf="( user.get(\'memid\').hasError(\'minlength\') || user.get(\'memid\').hasError(\'required\') ) && user.get(\'memid\').touched">\n			<div class="error" *ngIf="user.get(\'memid\').hasError(\'required\') && user.get(\'memid\').touched">\n			Please enter your membership id\n			</div>\n			<!--<div class="error" *ngIf="user.get(\'memid\').hasError(\'minlength\') && user.get(\'memid\').touched">\n			Minimum of 4 characters\n			</div>-->\n		</ion-item>\n\n\n\n		<ion-item>\n			<ion-label floating>Username</ion-label>\n			<ion-input type="text" value="" formControlName="name"></ion-input>\n		</ion-item>\n\n		<ion-item no-lines *ngIf="( user.get(\'name\').hasError(\'minlength\') || user.get(\'name\').hasError(\'required\') ) && user.get(\'name\').touched">\n			<div class="error" *ngIf="user.get(\'name\').hasError(\'required\') && user.get(\'name\').touched">\n			Please enter your username\n			</div>\n			<div class="error" *ngIf="user.get(\'name\').hasError(\'minlength\') && user.get(\'name\').touched">\n			Minimum of 4 characters\n			</div>\n		</ion-item>\n\n\n		<ion-item>\n			<ion-label floating>Password</ion-label>\n			<ion-input type="password" value="" formControlName="password"></ion-input>\n		</ion-item>\n\n		<ion-item no-lines *ngIf="( user.get(\'password\').hasError(\'required\') ) && user.get(\'password\').touched">\n			<div class="error" *ngIf="user.get(\'password\').hasError(\'required\') && user.get(\'password\').touched">\n			Password is required\n			</div>\n		</ion-item>\n\n\n		<ion-item>\n			<ion-label floating>Confirm Password</ion-label>\n			<ion-input type="password" value="" formControlName="re_password"></ion-input>\n		</ion-item>\n\n		<ion-item no-lines *ngIf="( user.get(\'re_password\').hasError(\'equalTo\') || user.get(\'re_password\').hasError(\'required\') ) && user.get(\'re_password\').touched">\n			<div class="error" *ngIf="user.get(\'re_password\').hasError(\'required\') && user.get(\'re_password\').touched">\n			Confirm password is required\n			</div>\n			<div class="error" *ngIf="user.get(\'re_password\').hasError(\'equalTo\') && user.get(\'re_password\').touched">\n			Password Mismatch\n			</div>\n		</ion-item>\n\n\n<div padding>\n		<button ion-button full [disabled]="user.invalid" (click)="mregister()">Register</button>\n</div>\n\n	</form>\n</ion-list>\n\n\n\n\n\n\n\n  <ion-list *ngSwitchCase="\'newusers\'">\n\n	<form novalidate [formGroup]="member">\n\n		<ion-item>\n			<ion-label floating>Full Name</ion-label>\n			<ion-input type="text" value="" formControlName="name"></ion-input>\n		</ion-item>\n\n		<ion-item no-lines *ngIf="( member.get(\'name\').hasError(\'minlength\') || member.get(\'name\').hasError(\'required\') ) && member.get(\'name\').touched">\n			<div class="error" *ngIf="member.get(\'name\').hasError(\'required\') && member.get(\'name\').touched">\n			Please enter your full name\n			</div>\n			<!--<div class="error" *ngIf="user.get(\'memid\').hasError(\'minlength\') && user.get(\'memid\').touched">\n			Minimum of 4 characters\n			</div>-->\n		</ion-item>\n\n\n		<ion-item>\n			<ion-label floating>Username</ion-label>\n			<ion-input type="text" value="" formControlName="username"></ion-input>\n		</ion-item>\n\n		<ion-item no-lines *ngIf="( member.get(\'username\').hasError(\'minlength\') || member.get(\'username\').hasError(\'required\') ) && member.get(\'username\').touched">\n			<div class="error" *ngIf="member.get(\'username\').hasError(\'required\') && member.get(\'username\').touched">\n			Please enter your username\n			</div>\n			<div class="error" *ngIf="member.get(\'username\').hasError(\'minlength\') && member.get(\'username\').touched">\n			Minimum of 4 characters\n			</div>\n		</ion-item>\n\n\n		<ion-item>\n		<ion-label floating>Email</ion-label>\n		<ion-input type="text" value="" formControlName="email"></ion-input>\n\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="( member.get(\'email\').hasError(\'required\') || member.get(\'email\').hasError(\'email\') ) && member.get(\'email\').touched">\n\n\n\n		<div class="error" *ngIf="member.get(\'email\').hasError(\'required\') && member.get(\'email\').touched">\n		Please enter your email\n		</div>\n\n<!--		<div class="error" *ngIf="member.get(\'email\').hasError(\'email\') && member.get(\'email\').touched">\n		Please enter valid email\n		</div>\n-->\n		</ion-item>\n\n\n		<ion-item>\n		<ion-label floating>Mob</ion-label>\n		<ion-input type="text" value="" formControlName="mob"></ion-input>\n\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="( member.get(\'mob\').hasError(\'required\') || member.get(\'mob\').hasError(\'minlength\') || member.get(\'mob\').hasError(\'maxlength\'))&& member.get(\'mob\').touched">\n\n\n\n		<div class="error" *ngIf="member.get(\'mob\').hasError(\'required\') && member.get(\'mob\').touched">\n		Please enter your mobile number\n		</div>\n		<div class="error" *ngIf="member.get(\'mob\').hasError(\'minlength\') && member.get(\'mob\').touched">\n		Please enter valid mobile number\n		</div>\n\n		<div class="error" *ngIf="member.get(\'mob\').hasError(\'maxlength\') && member.get(\'mob\').touched">\n		Please enter valid mobile number\n		</div>\n\n</ion-item>\n\n		<ion-item>\n			<ion-label floating>Password</ion-label>\n			<ion-input type="password" value="" formControlName="password"></ion-input>\n		</ion-item>\n\n		<ion-item no-lines *ngIf="( member.get(\'password\').hasError(\'required\') ) && member.get(\'password\').touched">\n			<div class="error" *ngIf="member.get(\'password\').hasError(\'required\') && member.get(\'password\').touched">\n			Password is required\n			</div>\n		</ion-item>\n\n\n		<ion-item>\n			<ion-label floating>Confirm Password</ion-label>\n			<ion-input type="password" value="" formControlName="re_password"></ion-input>\n		</ion-item>\n\n		<ion-item no-lines *ngIf="( member.get(\'re_password\').hasError(\'equalTo\') || member.get(\'re_password\').hasError(\'required\') ) && member.get(\'re_password\').touched">\n			<div class="error" *ngIf="member.get(\'re_password\').hasError(\'required\') && member.get(\'re_password\').touched">\n			Confirm password is required\n			</div>\n			<div class="error" *ngIf="member.get(\'re_password\').hasError(\'equalTo\') && member.get(\'re_password\').touched">\n			Password Mismatch\n			</div>\n		</ion-item>\n\n\n<div padding>\n		<button ion-button full [disabled]="member.invalid" (click)="newmregister()">Register</button>\n</div>\n\n	</form>\n</ion-list>\n</div>\n</ion-content>\n\n\n<style type="text/css">\n.error\n{\n	color:red;\n	font-size:12px;\n}\n\n</style>\n\n'/*ion-inline-end:"/root/temp/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToppingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { MapPage } from '../map/map';
/**
 * Generated class for the ToppingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToppingsPage = (function () {
    function ToppingsPage(navCtrl, navParams, viewCtrl, storage, userData, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.userData = userData;
        this.toastCtrl = toastCtrl;
        this.myModalOptions = {
            enableBackdropDismiss: false,
            cssClass: 'pricebreakup'
        };
        this.item = [];
        this.topping = [];
        this.meal = [];
        this.data = [];
        this.itemList = [];
        this.item = navParams.get("meal");
    }
    ToppingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToppingsPage');
    };
    ToppingsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        //this.navCtrl.setRoot(MapPage);
    };
    ToppingsPage.prototype.getToppings = function (top, combo) {
        var _this = this;
        console.log("Received: " + JSON.stringify(top) + " " + JSON.stringify(combo));
        //var panTop = JSON.stringify(top);
        if (top != "") {
            this.getTops().then(function (data) {
                if (data) {
                    _this.topping = data;
                    _this.topping = _this.topping.concat("{" + top + "}:");
                    console.log("Toppings: " + _this.topping);
                    _this.storage.set('toppings', JSON.stringify(_this.topping));
                }
                else {
                    _this.topping = "{" + top + "}:";
                    _this.storage.set('toppings', JSON.stringify(_this.topping));
                }
            });
            this.item.quantity++;
            console.log("Items: " + JSON.stringify(this.item));
            if (this.item.quantity >= 1) {
                this.userData.getMeals().then(function (data) {
                    _this.itemList = data;
                    console.log("Meals: " + JSON.stringify(_this.itemList));
                    var index;
                    _this.itemList.some(function (entry, i) {
                        if (entry.prod_name == "Pancakes") {
                            index = i;
                            return true;
                        }
                    });
                    _this.itemList[index].quantity = _this.item.quantity;
                    console.log("Item List: " + JSON.stringify(_this.itemList[index]));
                    _this.storage.set('meal', JSON.stringify(_this.itemList));
                });
            }
            this.viewCtrl.dismiss();
        }
        else if (combo != "") {
            this.getMeal().then(function (data) {
                if (data) {
                    _this.meal = data;
                    _this.meal = _this.meal.concat("{" + combo + "}" + ":");
                    console.log("Combo: " + _this.meal);
                    _this.storage.set('combo', JSON.stringify(_this.meal));
                }
                else {
                    _this.meal = "{" + combo + "}" + ":";
                    _this.storage.set('combo', JSON.stringify(_this.meal));
                }
            });
            this.item.quantity++;
            console.log("Items: " + JSON.stringify(this.item));
            if (this.item.quantity >= 1) {
                this.userData.getMeals().then(function (data) {
                    _this.itemList = data;
                    console.log("Meals: " + JSON.stringify(_this.itemList));
                    var index;
                    _this.itemList.some(function (entry, i) {
                        if (entry.prod_name == "Combo of any 4") {
                            index = i;
                            return true;
                        }
                    });
                    _this.itemList[index].quantity = _this.item.quantity;
                    console.log("Item List: " + JSON.stringify(_this.itemList[index]));
                    _this.storage.set('meal', JSON.stringify(_this.itemList));
                });
            }
            this.viewCtrl.dismiss();
        }
    };
    ToppingsPage.prototype.getTops = function () {
        return this.storage.get('toppings').then(function (value) {
            return JSON.parse(value);
        });
    };
    ToppingsPage.prototype.getMeal = function () {
        return this.storage.get('combo').then(function (value) {
            return JSON.parse(value);
        });
    };
    ToppingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toppings',template:/*ion-inline-start:"/root/temp/src/pages/toppings/toppings.html"*/'<!--\n  Generated template for the ToppingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n\n    <div *ngIf="item.prod_name == \'Pancakes\'">\n      <ion-title>Choose Topping</ion-title>\n    </div>\n\n    <div *ngIf="item.prod_name == \'Combo of any 4\'">\n      <ion-title>Choose your meal</ion-title>\n    </div>\n    \n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">Cancel</button>\n      </ion-buttons>\n</ion-toolbar>  \n\n</ion-header>\n\n\n<ion-content padding style="padding-top: 15px">\n  <div *ngIf="item">\n  <ion-list>\n    <div *ngIf="item.prod_name == \'Pancakes\'">\n      <ion-item>\n          <ion-label style="font-size: 14px">Pancake Toppings</ion-label>\n            \n              <ion-select [(ngModel)]="topping">\n                  <ion-option [value]="maple">Maple Syrup</ion-option>\n                  <ion-option [value]="blueberry">Blueberry Syrup</ion-option>\n                  <ion-option [value]="fruit">Mix-Fruit Syrup</ion-option>\n                  <ion-option [value]="butter">Butter</ion-option>\n              </ion-select>\n      </ion-item>\n  </div>\n\n  <div *ngIf="item.prod_name == \'Combo of any 4\'">\n    <ion-item>\n        <ion-label style="font-size: 14px">Chooes your meal</ion-label>\n            <ion-select [(ngModel)]="meal" multiple>\n                <ion-option [value]="paneer">Grilled Paneer</ion-option>\n                <ion-option [value]="chicken">Grilled Chicken</ion-option>\n                <ion-option [value]="brice">Brown Rice</ion-option>\n                <ion-option [value]="wrice">White Rice</ion-option>\n                <ion-option [value]="vegies">Vegies</ion-option>\n                <ion-option [value]="spotato">Sweet Potato</ion-option>\n                <ion-option [value]="beans">Kidney Beans/ Mixed Beans</ion-option>                    \n            </ion-select>\n    </ion-item>\n  </div>\n \n\n  <div padding>\n    <button ion-button full (click)="getToppings(topping,meal)">Ok</button>\n  </div>\n</ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/toppings/toppings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], ToppingsPage);
    return ToppingsPage;
}());

//# sourceMappingURL=toppings.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mealsdata_mealsdata__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__soups_soups__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__schedule_filter_schedule_filter__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, http, toastCtrl, confData, navParams, meals, user) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.navParams = navParams;
        this.meals = meals;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
        this.results = [];
        this.meals.getCategories().subscribe(function (data) {
            _this.temp = JSON.stringify(data);
            _this.items = JSON.parse(_this.temp);
            _this.initialize();
        });
    }
    SchedulePage.prototype.scroll = function () {
        this.content.scrollToTop();
    };
    SchedulePage.prototype.initialize = function () {
        this.data = this.items;
    };
    SchedulePage.prototype.getItems = function (ev) {
        this.initialize();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.data = this.data.filter(function (item) {
                return (item.cat_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.updateTimeline();
    };
    SchedulePage.prototype.updateTimeline = function () {
        var _this = this;
        this.meals.getCategories().subscribe(function (data) {
            _this.temp = JSON.stringify(data);
            _this.items = JSON.parse(_this.temp);
            _this.data = _this.items.filter(function (item) { return _this.excludeTracks.indexOf(item.name) < 0; });
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                //alert("Modal Closed: "+this.excludeTracks);
                //this.initialize();
                //this.data = this.data.filter(item => this.excludeTracks.indexOf(item.name) < 0);
                //this.updateTimeline(this.excludeTracks);
                _this.updateTimeline();
            }
        });
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    SchedulePage.prototype.view = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__soups_soups__["a" /* SoupsPage */], { item: item });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */])
    ], SchedulePage.prototype, "scheduleList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SchedulePage.prototype, "content", void 0);
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/root/temp/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title style="text-align: center; padding-right: 10px;">\n      <img alt="logo" height="53" src="assets/img/Wayfit logo1.png" >\n    </ion-title>\n\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="getItems($event)"\n                   placeholder="Search Diet">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid paddding style="margin-top:10px;">\n    <ion-row text-center>\n      <ion-col class="col-12">\n\n      <ion-card *ngFor="let item of data" (click)="view(item)">\n          <img class="full-image" src="http://wayfit.in/images/category-imgs/{{item.cat_img}}"/>\n          <div class="card-title" style="font-size: 18px">{{ item?.cat_name }}</div>\n      </ion-card>\n\n      </ion-col>\n  	</ion-row>\n  </ion-grid>\n\n\n<!--  <ion-fab bottom right #fab>\n    <button ion-fab mini><ion-icon name="share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="vimeo" (click)="openSocial(\'Vimeo\', fab)"><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab color="google" (click)="openSocial(\'Google+\', fab)"><ion-icon name="logo-googleplus"></ion-icon></button>\n      <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n\n  <button ion-button clear (click)="scroll()" float-right style="padding-right: 30px" >Go to top</button>\n-->\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/schedule/schedule.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_mealsdata_mealsdata__["a" /* MealsdataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// TODO remove
var SpeakerListPage = (function () {
    function SpeakerListPage(navCtrl, confData, config, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
    }
    SpeakerListPage.prototype.ionViewDidLoad = function () {
    };
    SpeakerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-list',template:/*ion-inline-start:"/root/temp/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Diet Plans</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/speaker-list/speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SpeakerListPage);
    return SpeakerListPage;
}());

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserData = (function () {
    function UserData(events, storage, loadingCtrl, http) {
        this.events = events;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.product = [];
        this.data = [];
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.topping = [];
        this.toppingsFlag = 't';
        this.mealFlag = 't';
        this.meal = [];
        this.temp = [];
        this.toppingsFlag = 't';
        this.mealFlag = 't';
    }
    UserData.prototype.ionViewWillEnter = function () {
        this.toppingsFlag = 't';
        this.mealFlag = 't';
    };
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.addToCart = function (item) {
        var _this = this;
        this.getMeals().then(function (data) {
            delete item.prod_desc;
            delete item.prod_img;
            if (data)
                _this.product = data;
            else {
                if (data == null)
                    _this.product = [];
                else
                    _this.product = _this.product.concat(item);
            }
            if (!(_this.product.some(function (a) { return a.prod_name.includes(item.prod_name); })))
                _this.product = _this.product.concat(item);
            _this.storage.set('meal', JSON.stringify(_this.product));
        });
    };
    UserData.prototype.getMeals = function () {
        return this.storage.get('meal').then(function (value) {
            return JSON.parse(value);
        });
    };
    UserData.prototype.removeMeal = function (item) {
        var _this = this;
        //this.storage.remove(this.storage.keys(item.prod_id));
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 300
        });
        loader.present();
        this.getMeals().then(function (data) {
            _this.data = data;
            var removeIndex = _this.data.map(function (item) { return item.prod_id; }).indexOf(item.prod_id);
            _this.data.splice(removeIndex, 1);
            if (_this.data.length == 0) {
                //this.storage.clear();
                _this.data = [];
                _this.data.splice(0, _this.data.length);
                _this.storage.remove('meal');
                if (item.prod_name == "Pancakes" && item.quantity == "0")
                    _this.storage.remove('toppings');
                else if (item.prod_name == "Combo of any 4" && item.quantity == "0")
                    _this.storage.remove('combo');
            }
            else
                _this.storage.set('meal', JSON.stringify(_this.data));
        });
    };
    UserData.prototype.getToppings = function () {
        return this.storage.get('toppings').then(function (value) {
            return JSON.parse(value);
        });
    };
    UserData.prototype.getMealData = function () {
        return this.storage.get('combo').then(function (value) {
            return JSON.parse(value);
        });
    };
    UserData.prototype.removeToppings = function (item) {
        var _this = this;
        console.log("Item: " + item);
        this.getToppings().then(function (data) {
            _this.topping = data;
            if (_this.toppingsFlag == 't') {
                //        console.log("Pancake Toppings: "+this.topping);
                var array = _this.topping.split(":");
                var pop = array.pop();
                var popped = array.pop();
                _this.storage.set('toppings', JSON.stringify(array));
                console.log("Pop 1: " + pop);
                console.log("Pop 2: " + popped);
                //console.log("Remove item: "+array);
                _this.toppingsFlag = 'f';
            }
            else {
                if (_this.topping.length == 1) {
                    var t = _this.topping.pop();
                    console.log("Popped: " + t);
                    _this.storage.remove('toppings');
                    _this.toppingsFlag = 't';
                }
                else {
                    t = _this.topping.pop();
                    console.log("Popped: " + t);
                    _this.storage.set('toppings', JSON.stringify(_this.topping));
                }
            }
        });
    };
    UserData.prototype.removeMealData = function (item) {
        var _this = this;
        console.log("Meal Data: " + item);
        this.getMealData().then(function (data) {
            _this.meal = data;
            console.log("Meal Toppings: " + _this.meal);
            if (_this.mealFlag == 't') {
                //  console.log("Meal Toppings: "+this.meal);
                var array = _this.meal.split(":");
                var pop = array.pop();
                var popped = array.pop();
                _this.storage.set('combo', JSON.stringify(array));
                console.log("Pop 1: " + pop);
                console.log("Pop 2: " + popped);
                //    console.log("Remove item: "+array);
                _this.mealFlag = 'f';
            }
            else {
                if (_this.meal.length == 1) {
                    var m = _this.meal.pop();
                    console.log("Popped: " + m);
                    _this.storage.remove('combo');
                    _this.mealFlag = 't';
                }
                else {
                    m = _this.meal.pop();
                    console.log("Popped: " + m);
                    _this.storage.set('combo', JSON.stringify(_this.meal));
                }
            }
        });
    };
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.addAPI = function (item) {
        alert("JSON : " + JSON.stringify(item));
        this.items = JSON.parse(JSON.stringify(item));
        return this.http.post('', this.items).map(function (res) { return res.json(); });
    };
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offers_offers__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.userData.setUsername(data.username);
                _this.getUsername();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
    AccountPage.prototype.offers = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__offers_offers__["a" /* OffersPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/root/temp/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center *ngIf="username">\n    <h2>{{username}}</h2>\n\n    <ion-list inset>\n      <button ion-item (click)="manageaddress()">Manage Addresses</button>\n      <button ion-item (click)="offers()">Offers</button>\n      <button ion-item (click)="changeUsername()">Change Username</button>\n      <button ion-item (click)="changePassword()">Change Password</button>\n      <button ion-item (click)="logout()">Logout</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimePage = (function () {
    function TimePage(navCtrl, navParams, viewCtrl, userData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.userData = userData;
        this.meal = [];
        this.quantities = [];
        this.initialize();
        this.getMealsData();
        JSON.stringify(this.timeslots);
        this.total = navParams.get("total");
        this.data = navParams.get("item");
        //alert("Meals: "+JSON.stringify(this.data));
        this.data.forEach(function (data) {
            _this.quantities.push(data.prod_id, data.quantity);
        });
        //    alert("Quantity Array: "+JSON.stringify(this.quantities));
    }
    TimePage.prototype.initialize = function () {
        this.timeslots = [
            { "st": "6 AM", "et": "7 AM" },
            { "st": "7 AM", "et": "8 AM" },
            { "st": "8 AM", "et": "9 AM" },
            { "st": "9 AM", "et": "10 AM" },
            { "st": "10 AM", "et": "11 AM" },
            { "st": "11 AM", "et": "12 PM" },
            { "st": "12 PM", "et": "1 PM" },
            { "st": "1 PM", "et": "2 PM" },
            { "st": "2 PM", "et": "3 PM" },
            { "st": "3 PM", "et": "4 PM" },
            { "st": "4 PM", "et": "5 PM" },
            { "st": "5 PM", "et": "6 PM" },
            { "st": "6 PM", "et": "7 PM" },
            { "st": "7 PM", "et": "8 PM" },
            { "st": "8 PM", "et": "9 PM" },
            { "st": "9 PM", "et": "10 PM" },
            { "st": "10 PM", "et": "11 PM" }
        ];
    };
    TimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimePage');
    };
    TimePage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    TimePage.prototype.slots = function (time) {
        alert("Time : " + JSON.stringify(time));
    };
    TimePage.prototype.getMealsData = function () {
        var _this = this;
        this.userData.getMeals().then(function (data) {
            _this.items = data;
            //alert("Item: "+JSON.stringify(this.items));
        });
    };
    TimePage.prototype.order = function (total, timeslot) {
        var _this = this;
        console.log("Total Amount: " + total);
        console.log("TimeSlot ST: " + timeslot.st);
        console.log("TimeSlot ET: " + timeslot.et);
        this.userData.getMeals().then(function (data) {
            _this.meal = data;
            console.log("Meal: " + JSON.stringify(_this.meal));
            _this.meal.forEach(function (value) {
                delete value.V;
                delete value.N;
            });
            console.log("Updated Meal: " + JSON.stringify(_this.meal));
        });
    };
    TimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-time',template:/*ion-inline-start:"/root/temp/src/pages/time/time.html"*/'<!--\n  Generated template for the TimePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n\n      <ion-title>Time Slot</ion-title>\n\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">Cancel</button>\n      </ion-buttons>\n</ion-toolbar>  \n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div padding>\n    <ion-list style="padding-top: 5px">\n      <ion-item>\n      <ion-label style="font-size: 14px">Delivery Time</ion-label>\n      <ion-select [(ngModel)]="time">\n        <ion-option *ngFor="let timeslot of timeslots" [value]="timeslot">{{ timeslot.st }} - {{ timeslot.et }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n  <div padding style="padding-top: 50px">\n    <h5>Grand Total: Rs.{{ total }}/-</h5>\n  </div>\n\n  <div padding>\n    <button ion-button full (click)="order(total,time)">Place Order</button>\n  </div>\n</ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/time/time.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], TimePage);
    return TimePage;
}());

//# sourceMappingURL=time.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mealsdata_mealsdata__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__description_description__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toppings_toppings__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { ItemsPage } from '../items/items';
/**
 * Generated class for the SoupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SoupsPage = (function () {
    function SoupsPage(navCtrl, navParams, viewCtrl, meals, modalCtrl, toastCtrl, userData, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.meals = meals;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.myModalOptions = {
            enableBackdropDismiss: false,
            cssClass: 'pricebreakup'
        };
        this.category = navParams.get('item');
        this.value = this.category.cat_name;
        this.id = this.category.cat_id;
        var url = 'http://wayfit.in/API/IndexDiet.php?request=foodType&obj={"cat_id":' + this.id + '}';
        this.meals.getJsonData(url).subscribe(function (result) {
            _this.results = JSON.stringify(result);
            _this.items = JSON.parse(_this.results);
            //console.log("Success : "+ this.items[0].prod_name);
            _this.initialize();
        });
    }
    SoupsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SoupsPage');
    };
    SoupsPage.prototype.initialize = function () {
        this.data = this.items;
        this.data = this.items.map(function (e1) {
            var o = Object.assign({}, e1);
            if (o.prod_name == "Pancakes" || o.prod_name == "Combo of any 4")
                o.quantity = "0";
            else
                o.quantity = "1";
            o.total = "0";
            return o;
        });
    };
    SoupsPage.prototype.description = function (ev, item) {
        ev.stopPropagation();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__description_description__["a" /* DescriptionPage */], { item: item }, this.myModalOptions);
        modal.present();
    };
    SoupsPage.prototype.getMeal = function (ev) {
        this.initialize();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.data = this.data.filter(function (item) {
                return (item.prod_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            //this.getData(this.items.id);
        }
    };
    SoupsPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    SoupsPage.prototype.add = function (ev, item) {
        var _this = this;
        ev.stopPropagation();
        this.userData.hasLoggedIn().then(function (data) {
            if (data) {
                _this.userData.addToCart(item);
                if (item.prod_name == "Pancakes" || item.prod_name == "Combo of any 4") {
                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__toppings_toppings__["a" /* ToppingsPage */], { meal: item }, _this.myModalOptions);
                    modal.present();
                }
                else {
                    if (_this.toast != null)
                        _this.toast.dismiss();
                    _this.toast = _this.toastCtrl.create({
                        message: 'Product added to cart',
                        showCloseButton: true,
                        closeButtonText: 'View'
                    });
                    _this.toast.onDidDismiss(function (data, role) {
                        console.log("Success: " + data);
                        if (role == 'close') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */]);
                        }
                    });
                    _this.toast.present();
                }
            }
            else {
                _this.userData.addToCart(item);
                if (item.prod_name == "Pancakes" || item.prod_name == "Combo of any 4") {
                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__toppings_toppings__["a" /* ToppingsPage */], { meal: item }, _this.myModalOptions);
                    modal.present();
                }
                else {
                    if (_this.toast != null)
                        _this.toast.dismiss();
                    _this.toast = _this.toastCtrl.create({
                        message: 'Product added to cart',
                        showCloseButton: true,
                        closeButtonText: 'View'
                    });
                    _this.toast.onDidDismiss(function (data, role) {
                        console.log("Success: " + data);
                        if (role == 'close') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */]);
                        }
                    });
                    _this.toast.present();
                }
            }
        });
    };
    SoupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-soups',template:/*ion-inline-start:"/root/temp/src/pages/soups/soups.html"*/'<!--\n  Generated template for the SoupsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ value }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<div>\n\n  <ion-searchbar color="primary"\n      [(ngModel)]="queryText"\n      (ionInput)="getMeal($event)"\n      placeholder="Search Meal">\n  </ion-searchbar>\n\n    <ion-list>\n      <ion-item-sliding *ngFor="let item of data">\n        <ion-item (click)="description($event,item)">\n        <ion-thumbnail item-start>\n          <img src="">\n        </ion-thumbnail>\n        \n        <p style="font-size:16px;">{{ item?.prod_name }}</p>\n          <p *ngIf=" item.V == \'Y\' ">Veg</p>\n          <p *ngIf=" item.V == \'N\' ">Non-Veg</p>\n\n          <p> Rs. {{ item?.mrp }} </p>\n       \n\n      <button ion-button clear item-end (click)="add($event,item)">Add</button>\n    </ion-item>\n  </ion-item-sliding>\n    \n    </ion-list>\n \n \n \n \n \n<!--    <ion-grid paddding>\n      <ion-row text-center>\n        <ion-col>\n  \n        <ion-card *ngFor="let item of items" (click)="order(item)">\n            <img src=""/>\n            <div class="card-title">{{ item?.prod_name }}</div>\n            <div class="card-subtitle">\n                <p *ngIf=" item.V == \'Y\' ">Veg</p>\n                <p *ngIf=" item.V == \'N\' ">Non-Veg</p>\n            </div>\n            <div>\n              Rs. {{ item?.mrp }}\n            </div>\n            \n        </ion-card>\n        <br>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  -->\n    \n	</div>\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/soups/soups.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_mealsdata_mealsdata__["a" /* MealsdataProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_mealsdata_mealsdata__["a" /* MealsdataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SoupsPage);
    return SoupsPage;
}());

//# sourceMappingURL=soups.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DescriptionPage = (function () {
    function DescriptionPage(navCtrl, navParams, viewCtrl, userData, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.userData = userData;
        this.toastCtrl = toastCtrl;
        this.item = navParams.get('item');
    }
    DescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescriptionPage');
    };
    DescriptionPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    DescriptionPage.prototype.add = function (item) {
        var _this = this;
        this.userData.hasLoggedIn().then(function (data) {
            if (data) {
                _this.userData.addToCart(item);
                var toast = _this.toastCtrl.create({
                    message: 'Product added to cart',
                    duration: 8000,
                    showCloseButton: true,
                    closeButtonText: 'View'
                });
                toast.onDidDismiss(function (data, role) {
                    console.log("Success: " + data);
                    if (role == 'close') {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */]);
                    }
                });
                toast.present();
            }
            else {
                _this.userData.addToCart(item);
                var toast = _this.toastCtrl.create({
                    message: 'Product added to cart',
                    duration: 8000,
                    showCloseButton: true,
                    closeButtonText: 'View'
                });
                toast.onDidDismiss(function (data, role) {
                    console.log("Success: " + data);
                    if (role == 'close') {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */]);
                    }
                });
                toast.present();
            }
        });
    };
    DescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-description',template:/*ion-inline-start:"/root/temp/src/pages/description/description.html"*/'<!--\n  Generated template for the DescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n\n      <ion-title>{{ item?.prod_name }}</ion-title>\n\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">Done</button>\n      </ion-buttons>\n</ion-toolbar>  \n\n</ion-header>\n\n\n<ion-content padding>\n<div padding>\n  <img src="item.prod_img" height="120px" width="270px">\n</div>\n\n<div padding>\n  <h6><b>Description: </b><p> {{ item?.prod_desc }}</p></h6>\n  <h6><b>Category : </b><p *ngIf=" item.V == \'Y\' ">Veg</p>  <p *ngIf=" item.V == \'N\' ">Non-Veg</p></h6>\n  <h6><b>Price :</b> Rs.{{ item?.mrp }}/-</h6><br>\n  <button ion-button full (click)="add(item)">Add To Cart</button>\n</div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/description/description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], DescriptionPage);
    return DescriptionPage;
}());

//# sourceMappingURL=description.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mealsdata_mealsdata__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(navParams, meals, viewCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.meals = meals;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        var excludedTrackNames = this.navParams.data;
        this.meals.getCategories().subscribe(function (data) {
            _this.temp = JSON.stringify(data);
            _this.items = JSON.parse(_this.temp);
            _this.items.forEach(function (category) {
                _this.tracks.push({
                    name: category.cat_name,
                    isChecked: (excludedTrackNames.indexOf(category.cat_name) === -1)
                });
            });
        }, function (err) {
            console.log("Error : " + err.name);
        }, function () {
            console.log("Successful");
        });
    }
    ScheduleFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        //alert("Excluded Tracks: "+excludedTrackNames);
        //this.tracks = this.tracks.filter(item => excludedTrackNames.indexOf(item.name) < 0);
        //alert("New String: "+str[0].name);
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.resetFilters = function () {
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"/root/temp/src/pages/schedule-filter/schedule-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cancel</button>\n    </ion-buttons>\n\n    <ion-title>\n      Filters\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>Categories</ion-list-header>\n\n    <ion-item *ngFor="let track of tracks">\n      <span item-start class="dot"></span>\n      <ion-label>{{ track.name }}</ion-label>\n      <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Reset All Filters\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/schedule-filter/schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_mealsdata_mealsdata__["a" /* MealsdataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/root/temp/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Welcome to <b>ICA</b>\n      </h2>\n      <p>\n        The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n      <h2 class="slide-title" >What is Ionic?</h2>\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n      <h2 class="slide-title">What is Ionic Pro?</h2>\n      <p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/root/temp/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Support</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Support message is required\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">Submit</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/root/temp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2/getting-started')\">Learn Ionic</button>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2')\">Documentation</button>\n      <button ion-item (click)=\"close('http://showcase.ionicframework.com')\">Showcase</button>\n      <button ion-item (click)=\"close('https://github.com/ionic-team/ionic')\">GitHub Repo</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_popover_about_popover__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_map_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_schedule_filter_schedule_filter__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_session_detail_session_detail__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_speaker_detail_speaker_detail__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_speaker_list_speaker_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_page_tabs_page__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_support_support__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_custhome_custhome__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_offers_offers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_soups_soups__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_description_description__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_items_items__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_time_time__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_toppings_toppings__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_conference_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_user_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_mealsdata_mealsdata__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_23__pages_custhome_custhome__["a" /* CusthomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_items_items__["a" /* ItemsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_toppings_toppings__["a" /* ToppingsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_description_description__["a" /* DescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_soups_soups__["a" /* SoupsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_time_time__["a" /* TimePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_support_support__["a" /* SupportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'schedule' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_session_detail_session_detail__["a" /* SessionDetailPage */], name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], name: 'ScheduleFilter', segment: 'scheduleFilter' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], name: 'SpeakerList', segment: 'speakerList' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */], name: 'Map', segment: 'map' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_custhome_custhome__["a" /* CusthomePage */], name: 'CusthomePage', segment: 'custhome' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_soups_soups__["a" /* SoupsPage */], name: 'SoupsPage', segment: 'soups' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_23__pages_custhome_custhome__["a" /* CusthomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_time_time__["a" /* TimePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_items_items__["a" /* ItemsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_toppings_toppings__["a" /* ToppingsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_description_description__["a" /* DescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_soups_soups__["a" /* SoupsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_support_support__["a" /* SupportPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__providers_conference_data__["a" /* ConferenceData */],
                __WEBPACK_IMPORTED_MODULE_31__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_32__providers_mealsdata_mealsdata__["a" /* MealsdataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_account__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_speaker_list_speaker_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_support_support__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_offers_offers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_conference_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Meals', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__["a" /* SchedulePage */], index: 0, icon: 'nutrition' },
            { title: 'Plans', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], index: 1, icon: 'clipboard' },
            { title: 'Cart', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */], index: 2, icon: 'cart' },
            { title: 'Offers', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_13__pages_offers_offers__["a" /* OffersPage */], index: 3, icon: 'flash' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Logout', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
    };
    ConferenceApp.prototype.about = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */]);
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'facebook';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'facebook';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/root/temp/src/app/app.template.html"*/'<ion-split-pane>\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Cafe WayFit</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Contact\n        </ion-list-header>\n        <button ion-item menuClose (click)="about()">\n          <ion-icon item-start name="information-circle"></ion-icon>\n          About Us\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Cafe WayFit</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Contact\n        </ion-list-header>\n        <button ion-item menuClose (click)="about()">\n          <ion-icon item-start name="information-circle"></ion-icon>\n          About Us\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/root/temp/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_15__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_14__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionDetailPage = (function () {
    function SessionDetailPage(dataProvider, navParams) {
        this.dataProvider = dataProvider;
        this.navParams = navParams;
    }
    SessionDetailPage.prototype.ionViewWillEnter = function () {
    };
    SessionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-session-detail',template:/*ion-inline-start:"/root/temp/src/pages/session-detail/session-detail.html"*/''/*ion-inline-end:"/root/temp/src/pages/session-detail/session-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());

//# sourceMappingURL=session-detail.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
    };
    SpeakerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-detail',template:/*ion-inline-start:"/root/temp/src/pages/speaker-detail/speaker-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Diet Plans</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/speaker-detail/speaker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SpeakerDetailPage);
    return SpeakerDetailPage;
}());

//# sourceMappingURL=speaker-detail.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CusthomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CusthomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CusthomePage = (function () {
    function CusthomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CusthomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CusthomePage');
    };
    CusthomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-custhome',template:/*ion-inline-start:"/root/temp/src/pages/custhome/custhome.html"*/'<!--\n  Generated template for the CusthomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/custhome/custhome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CusthomePage);
    return CusthomePage;
}());

//# sourceMappingURL=custhome.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemsPage = (function () {
    function ItemsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = navParams.get('item');
        //alert("Items: "+JSON.stringify(this.item));
    }
    ItemsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemsPage');
    };
    ItemsPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-items',template:/*ion-inline-start:"/root/temp/src/pages/items/items.html"*/'<!--\n  Generated template for the ItemsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n\n      <ion-title>{{ item?.prod_name }}</ion-title>\n\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">Done</button>\n      </ion-buttons>\n</ion-toolbar>  \n\n</ion-header>\n\n<ion-content padding>\n    <div padding>\n        <img src="item.prod_img" height="120px" width="270px">\n      </div>\n      \n      <div padding>\n        <h6><b>Description: </b><p> {{ item?.prod_desc }}</p></h6>\n        <h6><b>Category : </b><p *ngIf=" item.V == \'Y\' ">Veg</p>  <p *ngIf=" item.V == \'N\' ">Non-Veg</p></h6>\n        <h6><b>Price :</b> Rs.{{ item?.mrp }}/-</h6><br>\n\n      \n\n        <button ion-button full (click)="add(item)">Add To Cart</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/items/items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], ItemsPage);
    return ItemsPage;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/tracks.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__time_time__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toppings_toppings__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MapPage = (function () {
    function MapPage(confData, platform, navParams, viewCtrl, storage, location, loadingCtrl, toastCtrl, navCtrl, modalCtrl, userData) {
        this.confData = confData;
        this.platform = platform;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.location = location;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.itemList = [];
        this.myModalOptions = {
            enableBackdropDismiss: false,
            cssClass: 'pricebreakup'
        };
        this.getMealsData();
        //this.showTotal();
        MapPage_1.total = 0;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 200
        });
        loader.present();
    }
    MapPage_1 = MapPage;
    MapPage.prototype.ngOnInit = function () { };
    MapPage.prototype.ionViewWillEnter = function () {
        this.getMealsData();
    };
    MapPage.prototype.getMealsData = function () {
        var _this = this;
        this.userData.hasLoggedIn().then(function (data) {
            if (data) {
                _this.userData.getMeals().then(function (data) {
                    _this.items = data;
                });
            }
            else {
                _this.userData.getMeals().then(function (data) {
                    _this.items = data;
                });
            }
        });
    };
    MapPage.prototype.increment = function (ev, item) {
        var _this = this;
        ev.stopPropagation();
        if (item.prod_name == "Pancakes" || item.prod_name == "Combo of any 4") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__toppings_toppings__["a" /* ToppingsPage */], { meal: item }, this.myModalOptions);
            modal.present();
        }
        else {
            item.quantity++;
            item.total = (item.quantity * item.mrp);
            this.userData.getMeals().then(function (data) {
                _this.itemList = data;
                var index;
                _this.itemList.some(function (entry, i) {
                    if (entry.prod_name == item.prod_name) {
                        index = i;
                        return true;
                    }
                });
                _this.itemList[index].quantity = item.quantity;
                _this.storage.set('meal', JSON.stringify(_this.itemList));
            });
        }
    };
    MapPage.prototype.decrement = function (ev, item) {
        var _this = this;
        ev.stopPropagation();
        if (item.prod_name == "Pancakes") {
            this.userData.removeToppings(item.prod_name);
        }
        else if (item.prod_name == "Combo of any 4") {
            this.userData.removeMealData(item.prod_name);
        }
        if (item.quantity > 0 && item.quantity != 1) {
            item.quantity--;
            item.total = (item.quantity * item.mrp);
            //if(item.prod_name == "Pancakes" || item.prod_name == "Combo of any 4") {
            this.userData.getMeals().then(function (data) {
                _this.itemList = data;
                var index;
                _this.itemList.some(function (entry, i) {
                    if (entry.prod_name == item.prod_name) {
                        index = i;
                        return true;
                    }
                });
                _this.itemList[index].quantity = item.quantity;
                _this.storage.set('meal', JSON.stringify(_this.itemList));
            });
        }
        else if (item.quantity == 1) {
            item.quantity--;
            item.total = 0;
            this.userData.removeMeal(item);
            this.navCtrl.setRoot(MapPage_1);
        }
        //console.log("Decrement: "+item.total);
        //    MapPage.total -= item.total;
    };
    MapPage.prototype.order = function (meals) {
        var _this = this;
        MapPage_1.total = 0;
        //alert("Final Order: "+JSON.stringify(meals));
        meals.forEach(function (data) {
            if (data.total == 0)
                data.total = (data.mrp * data.quantity);
            MapPage_1.total += data.total;
        });
        this.userData.hasLoggedIn().then(function (data) {
            if (data) {
                _this.getMealsData();
                //console.log("Meals: "+JSON.stringify(meals));
                _this.storage.remove('meal');
                _this.storage.set('meal', JSON.stringify(meals));
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__time_time__["a" /* TimePage */], { item: meals, total: MapPage_1.total }, _this.myModalOptions);
                modal.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Please log in to continue',
                    duration: 8000,
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toast.onDidDismiss(function (data, role) {
                    console.log("Success: " + data);
                    if (role == 'close') {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */], { meal: meals });
                    }
                });
                toast.present();
            }
        });
    };
    Object.defineProperty(MapPage.prototype, "staticTotal", {
        /*showTotal() {
          this.userData.getMeals().then(data => {
            this.items = data;
      
            this.items.forEach(data =>{
                MapPage.total += data.total;
            });
          });
      
        }
      */
        get: function () {
            return MapPage_1.total;
        },
        enumerable: true,
        configurable: true
    });
    MapPage.total = 0;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = MapPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/root/temp/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cart</ion-title>\n\n<!--    <button ion-button end>\n      <ion-icon name="ios-cart-outline" style="position: relative; font-weight: bold; font-size: 2em" color="white">\n        <ion-badge style="position:absolute; font-weight: bold; top:-5px; left:9px; font-size: 9px" color="danger">2</ion-badge>\n      </ion-icon>\n    </button>\n-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="items!==null; else empty">\n  <ion-row padding>\n    <ion-col col-6><b>Recipes</b></ion-col>\n    <ion-col col-3><b>Quantity</b></ion-col>\n    <ion-col col-2><b>Price</b></ion-col>\n  </ion-row>\n    <ion-list>\n      <ion-item-sliding *ngFor="let item of items">\n        <ion-item>\n          <ion-row>\n          \n            <ion-col col-6>\n                <p id="truncate" style="font-size:13px;">{{ item?.prod_name }}</p>\n            </ion-col>\n\n            <ion-col col-3>\n              <ion-icon name="remove-circle" (click)="decrement($event,item)"></ion-icon>\n                {{ item.quantity }}\n              <ion-icon name="add-circle" (click)="increment($event,item)"></ion-icon>\n            </ion-col>\n\n            <ion-col col-1>\n              <p ng-model="total"> Rs.{{ item.mrp * item.quantity }}/- </p>\n            </ion-col>\n  \n          </ion-row>\n      </ion-item>\n\n<!--      <div padding>\n        <h3>Grand Total : {{  }}</h3>\n      </div>\n    -->      \n    </ion-item-sliding>\n    </ion-list>\n\n    <div padding>\n      <button ion-button full (click)="order(items)">Confirm Order</button> \n    </div>\n  </div>\n\n  <ng-template #empty>\n    <h2 style="text-align: center">Your Cart is Empty</h2>\n  </ng-template>\n\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */]])
    ], MapPage);
    return MapPage;
    var MapPage_1;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OffersPage = (function () {
    function OffersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OffersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OffersPage');
    };
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offers',template:/*ion-inline-start:"/root/temp/src/pages/offers/offers.html"*/'<!--\n  Generated template for the OffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Offers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/root/temp/src/pages/offers/offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speaker_list_speaker_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offers_offers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navParams, events, userData) {
        this.events = events;
        this.userData = userData;
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* SchedulePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__offers_offers__["a" /* OffersPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage.prototype.scroll = function () {
        //this.content.scrollToTop();
        //this.tab1Root.scroll();
    };
    TabsPage.prototype.ionViewDidEnter = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], TabsPage.prototype, "content", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/root/temp/src/pages/tabs-page/tabs-page.html"*/'<ion-content has-footer="true" has-tabs="true">\n\n<ion-tabs [selectedIndex]="mySelectedIndex" name="conference" mode="md" tabsPlacement="bottom">\n  <ion-tab [root]="tab1Root" tabTitle="Meals" tabIcon="nutrition" tabUrlPath="conference-schedule"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Plans" tabIcon="clipboard"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Cart" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Offers" tabIcon="flash"></ion-tab>\n</ion-tabs>\n</ion-content>'/*ion-inline-end:"/root/temp/src/pages/tabs-page/tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_user_data__["a" /* UserData */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealsdataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MealsdataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MealsdataProvider = (function () {
    function MealsdataProvider(http) {
        this.http = http;
        console.log('Hello MealsdataProvider Provider');
    }
    MealsdataProvider.prototype.getJsonData = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    MealsdataProvider.prototype.getCategories = function () {
        return this.http.get('http://wayfit.in/API/IndexDiet.php?request=categoryList').map(function (res) { return res.json(); });
    };
    MealsdataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], MealsdataProvider);
    return MealsdataProvider;
}());

//# sourceMappingURL=mealsdata.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map