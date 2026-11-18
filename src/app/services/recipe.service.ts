import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeDto } from "../models/request/RecipeDto";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RecipeService {

  private SERVER_URL: string = environment.urlAddress;

  constructor(private http: HttpClient) {}

  public GetAllRecipes(data: RecipeDto) {
    return this.http.post<any>(
      this.SERVER_URL + "Admin/GetRecipesByUserId",
      data
    );
  }
}
