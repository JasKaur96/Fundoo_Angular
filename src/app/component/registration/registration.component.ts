import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user/user.service';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [Validators.required, Validators.pattern(/^[A-Z]{1}[a-z]{2,}$/)],
        ],
        lastName: [
          '',
          [Validators.required, Validators.pattern(/^[A-Z]{1}[a-z]{2,}$/)],
        ],
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
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/
            ),
          ],
        ],
        // Add more form controls as needed
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  handleSubmit() {
    this.submitted = true;

    const { firstName, lastName, email, password } = this.registerForm.value;
    if (this.registerForm.valid) {
      this.userService
        .signup({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          service: 'advance',
        })
        .subscribe((response: any) => {
          console.log('id', response);
          localStorage.setItem('token', response.id);
        });
    }
  }
}
