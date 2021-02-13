import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/services/form.service';
import { IFormHubspot } from '../../shared/models/hubspot';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData: FormGroup;
  clicked: false;

  constructor(private formBuilder: FormBuilder, private formService: FormService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.formData = this.buildForm();
  }

  sendData(formdata: FormGroup): void {
    const data: IFormHubspot = {
      fields: [
        {
          name: 'fullname',
          value: formdata.value.fullname
        },
        {
          name: 'email',
          value: formdata.value.email
        },
        {
          name: 'job_function',
          value: formdata.value.job
        }
      ],
      context: {
        hutk: this.cookieService.get('hubspotutk'),
        pageUri: 'antonellozitelli.it/comunica-da-leader',
        pageName: 'Comunica da Leader'
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: formdata.value.privacycheckbox,
          text: 'Presto il consenso al trattamento dei miei dati'
        }
      }
    };
    console.log(data);
    /*this.formService.submitForm(data);*/
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      job: new FormControl('', [Validators.required]),
      privacycheckbox: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  checkForm(id): void {
    if (this.formData.get(id).hasError('required') || this.formData.get(id).hasError('email')) {
      document.getElementById(id).className = 'focus-input invalid-input';
      document.getElementById('form-err-message').innerHTML = 'Controlla i campi evidenziati';
    } else {
      document.getElementById('form-err-message').innerHTML = '';
      document.getElementById(id).className = 'focus-input';
    }
  }
}
