import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrl: './complex-form.component.scss'
})
export class ComplexFormComponent implements OnInit{


  mainForm!: FormGroup
  personalInfoForm!: FormGroup

  contactPreferenceCtrl!: FormControl;

  emailForm!: FormGroup;
  emailCtrl!: FormControl
  confirmEmailCtrl!: FormControl

  phoneCtrl!: FormControl

  loginInfoForm!: FormGroup
  usernameCtrl!: FormControl
  passwordCtrl!: FormControl
  confirmPasswordCtrl!: FormControl

  showEmail!: boolean
  showPhone!: boolean

  constructor(private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.showEmail = true
    this.initFormControls();
    this.initMainForm()
    
  }

  initMainForm(): void{
    this.mainForm = this.formBuilder.group({
      personalInfo: this.personalInfoForm,
      contactPreference: this.contactPreferenceCtrl,
      email: this.emailForm,
      phone: this.phoneCtrl,
      loginInfo: this.loginInfoForm
    })
  }

  private initFormControls(): void{
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.contactPreferenceCtrl = this.formBuilder.control('email')

    this.emailCtrl = this.formBuilder.control('', [Validators.required, Validators.email])
    this.confirmEmailCtrl = this.formBuilder.control('', [Validators.required, Validators.email])
    this.emailForm = this.formBuilder.group({
      email: this.emailCtrl,
      confirm: this.confirmEmailCtrl
    })

    this.phoneCtrl = this.formBuilder.control('')

    this.passwordCtrl = this.formBuilder.control('', Validators.required);
    this.confirmPasswordCtrl = this.formBuilder.control('', Validators.required);

    this.loginInfoForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: this.passwordCtrl,
      confirm: this.confirmPasswordCtrl
    })
  }


  onEmailFrom() {
      this.showEmail = true
      this.showPhone = false
      }
  onPhoneFrom() {
    this.showPhone = true
    this.showEmail = false
    }
    
    
    onSubmitForm() {
      console.log("**", this.mainForm.value)
    }
}
