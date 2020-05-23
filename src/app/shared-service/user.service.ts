import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signupApi(loginBody) {
    const url = " https://kig5yrl3i9.execute-api.us-east-1.amazonaws.com/dev/register"
    const httpHeaders = {
    }
    return this.http.post(url, loginBody)
  }
  loggedIn(body) {
    const url = "https://kig5yrl3i9.execute-api.us-east-1.amazonaws.com/dev/login"
    const httpHeaders = {
      headers: new HttpHeaders({
        "Auth": "my Auth",
      })
    }

    return this.http.post(url, body, httpHeaders)
  }
}
