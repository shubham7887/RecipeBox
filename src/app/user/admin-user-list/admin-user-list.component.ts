import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AlertService } from "../../services/alert.service";
import { AdminUserService } from "../../services/admin-user.service";
import { AdminUserDetail } from "../../models/request/AdminUserDetail";


@Component({
  selector: "app-admin-user-list",
  templateUrl: "./admin-user-list.component.html",
  styleUrls: ["./admin-user-list.component.scss"],
})
export class AdminUserListComponent implements OnInit {
  Userlist!: any;
  adminForm!: FormGroup;
  title = "appBootstrap";
  closeResult: string = "";
  loading = false;
  submitted = false;
  returnUrl = "/userList";
  page = 0;
  pageSize=2;
  collectionSize = 0;

  adminUser:AdminUserDetail={
    PageNumber: 0,
    PageSize: 0,
    Name: "",
    Email: ""
  };
  constructor(
    private adminuserservice: AdminUserService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.GetAdminUserList();
    this.adminForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  GetAdminUserList() {
    this.adminUser.PageNumber= this.page;
    this.adminUser.PageSize=this.pageSize;
    this.adminuserservice.GetAdminUsers(this.adminUser).subscribe((res) => {
      this.Userlist = res.userdetails;
      this.collectionSize = res.totalUsers;
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.adminForm.controls;
  }

  CreateAdminUser() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.adminForm.invalid) {
      return;
    } else {
      this.adminuserservice
        .CreateAdminUser(this.adminForm.value)
        .subscribe((data) => {
          debugger;
          this.alertService.success("Alert- User inserted successfully", true);
          this.modalService.dismissAll("closed after data save.");
          window.location.reload();
        });
    }
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
