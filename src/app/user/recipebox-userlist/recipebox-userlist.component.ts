import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AlertService } from "../../services/alert.service";
import { AdminUserService } from "../../services/admin-user.service";
import { RBUserDetail } from "../../models/request/RBUserDetail";

@Component({
  selector: "app-recipebox-userlist",
  templateUrl: "./recipebox-userlist.component.html",
  styleUrls: ["./recipebox-userlist.component.scss"],
})
export class RecipeboxUserlistComponent implements OnInit {
  rbuserList!: any;
  rbuserDetail: RBUserDetail = {
    PageNumber: 0,
    PageSize: 15,
    UserName: "",
    Email: "",
    Name: "",
    FireBaseId: "",
    Country: "",
    UserChoosenLanguage: "",
    RegfromDate: null,
    RegtoDate: null,
    AppOpenfromDate: null,
    AppOpentoDate: null,
    ActivePackageId: "",
    DeviceOS: "",
    UserSource: null,
    LastOnBoardingStep: null,
  };
  page = 0;
  pageSize = 5;
  collectionSize = 0;
  constructor(
    private adminuserservice: AdminUserService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.GetRBUserList();
  }

  filterData(data: any) {
    debugger;
    //console.log(data);
    //this.rbuserList= this.rbuserList.filter((a: any) => {return a.userName == data.formdata.UserName;});
    this.rbuserDetail.UserName = data.formdata.UserName;
    this.rbuserDetail.Email = data.formdata.Email;
    this.rbuserDetail.Name = data.formdata.Name;
    this.rbuserDetail.FireBaseId = data.formdata.FireBaseId;
    this.rbuserDetail.Country = data.formdata.Country;
    this.rbuserDetail.UserChoosenLanguage = data.formdata.UserChoosenLanguage;
    this.rbuserDetail.RegfromDate = data.formdata.regfromDate;
    this.rbuserDetail.RegtoDate = data.formdata.regtoDate;
    this.rbuserDetail.AppOpenfromDate = data.formdata.appOpenfromDate;
    this.rbuserDetail.AppOpentoDate = data.formdata.appOpentoDate;
    this.rbuserDetail.ActivePackageId = data.formdata.PackageName;
    this.rbuserDetail.DeviceOS = data.formdata.DeviceOS;
   // this.rbuserDetail.UserSource = data.formdata.Source==""?null:+data.formdata.Source;
    if(data.formdata.Source=="" || data.formdata.Source==null)
    {
      this.rbuserDetail.UserSource=null;
    }
    else{
      this.rbuserDetail.UserSource=+data.formdata.Source;
    }
    //this.rbuserDetail.LastOnBoardingStep = data.formdata.LastOnBoardingStep==""?null:+data.formdata.LastOnBoardingStep;
    if(data.formdata.LastOnBoardingStep=="" || data.formdata.LastOnBoardingStep==null)
    {
      this.rbuserDetail.LastOnBoardingStep=null;
    }
    else{
      this.rbuserDetail.LastOnBoardingStep=+data.formdata.LastOnBoardingStep;
    }
    this.rbuserDetail.PageNumber = this.page;
    this.rbuserDetail.PageSize = this.pageSize;
    this.adminuserservice
      .GetRecipeBoxUsers(this.rbuserDetail)
      .subscribe((res) => {
        this.rbuserList = res.users;
        this.collectionSize = res.totalUserCount;
      });
  }

  GetRBUserList() {
    this.rbuserDetail.PageNumber = this.page;
    this.rbuserDetail.PageSize = this.pageSize;
    debugger
    this.adminuserservice
      .GetRecipeBoxUsers(this.rbuserDetail)
      .subscribe((res) => {
        this.rbuserList = res.users;
        this.collectionSize = res.totalUserCount;
      });
  }
}
