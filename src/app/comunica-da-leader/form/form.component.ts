import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormService} from '../../shared/services/form.service';
import {IFormHubspot, IResponseHubspot} from '../../shared/models/hubspot';
import {CookieService} from 'ngx-cookie-service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  formData: FormGroup;
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private formService: FormService, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.formData = this.buildForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
        pageUri: 'antonellozitelli.it/comunica-da-leader',
        pageName: 'Comunica da Leader'
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: formdata.value.privacycheckbox,
          text: 'Autorizzo il trattamento dei miei dati personali'
        }
      }
    };
    if (this.cookieService.check('hubspotutk')) {
      data.context = {
        hutk: this.cookieService.get('hubspotutk'),
        pageUri: 'antonellozitelli.it/comunica-da-leader',
        pageName: 'Comunica da Leader'
      };
    }
    this.subscription = this.formService.submitForm(data).subscribe((response: IResponseHubspot) => {
        if (response.inlineMessage === 'Grazie per aver inviato il modulo.') {
          this.cookieService.set('book-preview-access', 'true', 15);
          window.location.reload();
        } else {
          this.handleError();
        }
      },
      (error) => {
        this.handleError();
      });
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
      document.getElementById('form-err').innerHTML = 'Controlla i campi evidenziati';
    } else {
      document.getElementById('form-err').innerHTML = '';
      document.getElementById(id).className = 'focus-input';
    }
  }

  handleError(): void {
    const formsenderr = document.getElementById('form-send-err');
    formsenderr.className = 'show';
    setTimeout(() => {
      formsenderr.className = formsenderr.className.replace('show', '');
    }, 5000);
  }
}
