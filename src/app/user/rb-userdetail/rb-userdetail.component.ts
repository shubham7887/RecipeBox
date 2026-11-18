import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AlertService } from "../../services/alert.service";
import { AdminUserService } from "../../services/admin-user.service";


@Component({
  selector: "app-rb-userdetail",
  templateUrl: "./rb-userdetail.component.html",
  styleUrls: ["./rb-userdetail.component.scss"],
})
export class RbUserdetailComponent implements OnInit {
  recipeuser!: any;
  id!: number;
  editForm!: FormGroup;
  submitted = false;
  constructor(
    private adminuserservice: AdminUserService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params["userId"];
    this.ViewUserDetail(this.id);
   // this.alertService.success("success",false);
    this.editForm = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      userName: new FormControl("", Validators.required),
      country: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      userSource: new FormControl("", Validators.required),
      userSourceBannerID: new FormControl("", Validators.required),
      userSourceCampaign: new FormControl("", Validators.required),
      userSourceSubBannerID: new FormControl("", Validators.required),
      userID: this.id,
    });
  }
  get f() {
    return this.editForm.controls;
  }

  ViewUserDetail = (id: number) => {
    this.adminuserservice
      .ViewRecipeBoxUserDetail(id)
      .subscribe((response: any) => {
        this.recipeuser = response.body;
      });
  };

  EditUserDetails = () => {
    debugger;
    console.log("id", this.id);
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    } else {
      this.adminuserservice
        .UpdateRecipeBoxUserDetail(this.editForm.value)
        .subscribe((response: any) => {
          window.location.reload();
        });
    }
  };
}
