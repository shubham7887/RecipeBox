import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AlertService } from "../../services/alert.service";
import { RecipeService } from "../../services/recipe.service";
import { RecipeDto } from "../../models/request/RecipeDto";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"],
})
export class RecipeListComponent implements OnInit {
  recipeList!: any;
  recipeDto: RecipeDto = {
    PageNumber: 1,
    PageSize: 15,
    UserId: "",
    IsFavourite: false,
  };
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  constructor(
    private recipeService: RecipeService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.GetRecipeList();
  }

  GetRecipeList() {
    debugger
    this.recipeDto.PageNumber= this.page;
    this.recipeDto.PageSize=this.pageSize;
    this.recipeService.GetAllRecipes(this.recipeDto).subscribe((res:any) => {
      debugger
      this.recipeList = res.recipes;
      this.collectionSize = res.totalRecipes;
    });
  }

  filterRecipeData(data: any) {
    debugger;
    // this.rbuserDetail.UserName = data.formdata.UserName;
    // this.rbuserDetail.Email = data.formdata.Email;
    // this.rbuserDetail.UserId = data.formdata.UserId;
    // this.rbuserDetail.PageNumber = this.page;
    // this.rbuserDetail.PageSize = this.pageSize;
    // this.adminuserservice
    //   .GetRecipeBoxUsers(this.rbuserDetail)
    //   .subscribe((res) => {
    //     this.rbuserList = res.users;
    //     this.collectionSize = res.totalUserCount;
    //   });
  }
}
