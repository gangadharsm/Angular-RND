import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormComponentBase } from '../../core/form-component-base';
import { CrossFieldErrorMatcher } from '../../core/cross-field-error-matcher';
import { passwordsDoNotMatch } from '../../core/passwords-do-not-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends FormComponentBase implements OnInit, AfterViewInit {
  @ViewChild('email', { static: false })
  firstItem: ElementRef;
  signupForm: FormGroup;
  hidePassword = true;
  errorMatcher = new CrossFieldErrorMatcher();

  constructor(private formBuilder: FormBuilder) {
    super();
    this.validationMessages = {
      email: {
        required: 'Email is required.',
        email: 'Email is not properly formatted.',
      },
      userName: {
        required: 'User name is required.',
        minlength: 'User name minimum length is 6.',
        maxlength: 'User name maximum length is 15.',
        pattern: 'User name minimum length 6, allowed characters letters, numbers only. No spaces.'
      },
      password: {
        required: 'Password is required.',
        minlength: 'Password minimum length is 6.',
        maxlength: 'Password maximum length is 15.',
        pattern: 'Password minimum length 6, requires one letter, one number, one special character !@#$%^&* no spaces.'
      },
      confirmPassword: {
        required: 'Confirm password is required.',
        minlength: 'Confirm password minimum length is 6.',
        maxlength: 'Confirm password maximum length is 15.',
        pattern: 'Confirm password minimum length 6, requires one letter, one number, one special character !@#$%^&* no spaces.',
        passwordsDoNotMatch: 'Passwords must match.'
      },
      passwordsGroup: {
        passwordsDoNotMatch: 'Passwords must match.'
      }
    };

    this.formErrors = {
      email: '',
      userName: ''
    };
  }

  ngOnInit() {
    this.createSignupForm();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstItem.nativeElement.focus();
    }, 250);
    this.startControlMonitoring(this.signupForm);
  }

  createSignupForm() {
    this.signupForm = this.formBuilder.group({
      userName: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9]*$')]],
      email: ['', [
        Validators.required,
        Validators.email]],
      passwordsGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')]],
        confirmPassword: ['', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')]],
      }, { validators: passwordsDoNotMatch })
    });
  }

  onSubmit() {
    console.log(this.signupForm.valid);
    if (!this.signupForm.valid) {
      this.validateAllFormFields(this.signupForm);
    }
  }

  validateAllFormFields(formGroup: any) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
