import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RBUserDetail } from "../models/request/RBUserDetail";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { AdminUserDetail } from "../../app/models/request/AdminUserDetail";

@Injectable({
  providedIn: "root",
})
export class AdminUserService {
  private SERVER_URL: string = environment.urlAddress;

  constructor(private http: HttpClient) {}

  public GetAdminUsers(adminUser: AdminUserDetail) {
    return this.http.post<any>(
      this.SERVER_URL + "Admin/GetAdminUsers",
      adminUser
    );
  }

  public CreateAdminUser(AdminUserDetail: any) {
    return this.http.post<any>(
      this.SERVER_URL + "Admin/InsertAdminUser",
      AdminUserDetail
    );
  }

  public GetRecipeBoxUsers(rbuserDetails: RBUserDetail) {
    return this.http.post<any>(
      this.SERVER_URL + "Admin/GetRecipeBoxUsers",
      rbuserDetails
    );
  }

  public ViewRecipeBoxUserDetail(id: any): Observable<any> {
    return this.http.get<any>(
      this.SERVER_URL + "Admin/GetRecipeBoxUserDetailsById?UserId=" + id,
      { observe: "response" }
    );
  }

  public UpdateRecipeBoxUserDetail(data: any): Observable<any> {
    return this.http.put<any>(
      this.SERVER_URL + "Admin/UpdateRecipeBoxUser",
      JSON.stringify(data)
    );
  }

  public GetLanguageList(): Observable<any> {
    return this.http.get<any>(
      this.SERVER_URL + "UserAccount/GetLanguages",
      { observe: "response" }
    );
  }
}
