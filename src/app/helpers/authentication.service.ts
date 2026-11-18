import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/request/user";
import { catchError, map, Observable, throwError } from "rxjs";
import { ILogin } from "../models/request/Login";
import { retry } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private SERVER_URL: string = environment.urlAddress;
 // private SERVER_URL = "https://localhost:5001/api/Admin/LoginAdmin";
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private http: HttpClient) {}
  
  login(model: ILogin) {
    debugger;
    return this.http.post<any>(this.SERVER_URL+'Admin/LoginAdmin', model, this.httpOptions).pipe(
      map((response) => {
        let user = new User();
        if (response && response.accessToken) {
          // Build up a user
          user.AccessToken = response.accessToken;
          localStorage.setItem("token", user.AccessToken);
        }
        return user;
      })
    );
  }

  logout(): void {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("token");
  }
}
