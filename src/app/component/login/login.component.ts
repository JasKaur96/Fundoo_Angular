import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None, // material css chnage
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/
          ),
        ],
      ],
    });
  }

  handleLogin() {
    this.submitted = true;
    console.log('handle', this.loginForm);

    const { email, password } = this.loginForm.value;
    if (this.loginForm.valid) {
      this.userService
        .login({
          email: email,
          password: password,
        })
        .subscribe((response: any) => {
          console.log('id', response);
          if (response.id) {
            localStorage.setItem('token', response.id);
            this.router.navigate(['dashboard']);
          }
        });
    }
  }
}
