import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IFormHubspot, IResponseHubspot} from '../models/hubspot';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) {
  }

  submitForm(data: IFormHubspot): Observable<IResponseHubspot> {
    return this.http.post('https://api.hsforms.com/submissions/v3/integration/submit/9293888/8b4885ef-8ca0-4cad-9997-d92d9ff3d3af', data)
      .pipe(catchError((err) => {
          return throwError(err);
        })
      );
  }
}
