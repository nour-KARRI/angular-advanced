import { Injectable } from "@angular/core";
import { ComplexFormValue } from "../models/complex-from-value.model";
import { catchError, delay, mapTo, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";

@Injectable()
export class FormComplexService {

    constructor(private http: HttpClient) {}

    saveUserInfo(user: ComplexFormValue): Observable<boolean>{

        return this.http.post<ComplexFormValue>(`${environment.apiUrl}/users`, user).pipe(
            mapTo(true),
            delay(1000),
            catchError(() => of(false).pipe(
                delay(1000)
        )))
    }

}