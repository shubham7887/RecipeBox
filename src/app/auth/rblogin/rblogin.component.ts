import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../../helpers/authentication.service";
import { first } from "rxjs/operators";
import { ILogin } from "../../models/request/Login";

@Component({
  selector: "app-rblogin",
  templateUrl: "./rblogin.component.html",
  styleUrls: ["./rblogin.component.scss"],
})
export class RBLoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl = "";
  message!: string;
  items = "";
  isCollapsed = false;

  model: ILogin = { UserName: "AdminVK", Password: "Admin@123" };
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.loginForm.setValue({ email: "AdminVK", password: "Admin@123" });
    this.returnUrl =
      this.route.snapshot.queryParams["returnUrl"] || "/dashboard";
    debugger;
    this.authService.logout();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  loginAdmin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      if (
        this.f.email.value == this.model.UserName &&
        this.f.password.value == this.model.Password
      ) {
        debugger;
        // this.authService.login(this.f.email.value, this.f.password.value);
        this.authService.login(this.model).subscribe((data) => {
          debugger;
        });
        console.log("Login successful");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", this.f.email.value);
        this.router.navigate([this.returnUrl]);
      } else {
        this.message = "Please check your email and password";
        this.loading = false;
      }
    }
    this.loading = true;
  }

  onShow() {
    this.isCollapsed = !this.isCollapsed;
  }
  onOptions(event: any) {
    this.items = event.target.value;
  }
}
