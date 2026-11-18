import { HttpClient } from "@angular/common/http";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AdminUserService } from "../../services/admin-user.service";
import { map } from "rxjs";
import { LastOnBoardingStep } from "../../models/request/OnBoardingStep";
import {
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-user-management-filter",
  templateUrl: "./user-management-filter.component.html",
  styleUrls: ["./user-management-filter.component.scss"],
})
export class UserManagementFilterComponent implements OnInit {
  filterForm!: FormGroup;
  countryData!: any;
  LanguageList!: any;
  //deviceOs list - static values ios,andorid added(GK)
  Steps = LastOnBoardingStep;
  enumKeys: string[] = [];

  reghoveredDate: NgbDate | null = null;
  regfromDate!: NgbDate | null;
  regtoDate!: NgbDate | null;

  appOpenhoveredDate: NgbDate | null = null;
  appOpenfromDate!: NgbDate | null;
  appOpentoDate!: NgbDate | null;

  @Output() valueChange = new EventEmitter();

  SearchByfilterValue() {
    debugger;
    this.filterForm.patchValue({
      regfromDate:
        this.regfromDate != null
          ? this.regfromDate?.month +
            "/" +
            this.regfromDate?.day +
            "/" +
            this.regfromDate?.year
          : this.regfromDate,
      regtoDate:
        this.regtoDate != null
          ? this.regtoDate?.month +
            "/" +
            this.regtoDate?.day +
            "/" +
            this.regtoDate?.year
          : this.regtoDate,

      appOpenfromDate:
        this.appOpenfromDate != null
          ? this.appOpenfromDate?.month +
            "/" +
            this.appOpenfromDate?.day +
            "/" +
            this.appOpenfromDate?.year
          : this.appOpenfromDate,
      appOpentoDate:
        this.appOpentoDate != null
          ? this.appOpentoDate?.month +
            "/" +
            this.appOpentoDate?.day +
            "/" +
            this.appOpentoDate?.year
          : this.appOpentoDate,
    });
    this.valueChange.emit({ formdata: this.filterForm.value });
  }

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private adminuserservice: AdminUserService,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {}

  ngOnInit(): void {
    this.http
      .get("https://countriesnow.space/api/v0.1/countries")
      .subscribe((data: any) => {
        this.countryData = data.data;
      });
    this.adminuserservice.GetLanguageList().subscribe((res) => {
      this.LanguageList = res.body.languages;
    });
    this.filterForm = this.formBuilder.group({
      UserName: [""],
      Name: [""],
      FirebaseId: [""],
      PackageName: [""],
      Source: [""],
      Email: [
        "",
        [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      ],
      Country: [""],
      UserChoosenLanguage: [""],
      DeviceOS: [""],
      LastOnBoardingStep: [""],
      regfromDate: [],
      regtoDate: [],
      appOpenfromDate: [],
      appOpentoDate: [],
    });
    debugger;
    // this.regfromDate = this.calendar.getToday();
    // this.regtoDate = this.calendar.getNext(this.calendar.getToday(), "d", 10);

    // this.appOpenfromDate = this.calendar.getToday();
    // this.appOpentoDate = this.calendar.getNext(this.calendar.getToday(),"d",10);
    this.enumKeys = Object.keys(this.Steps);
  }

  Reset() {
    debugger
    this.filterForm.reset();
    this.regfromDate = null;
    this.regtoDate = null;

    this.appOpenfromDate =null;
    this.appOpentoDate = null;
  }

  onRegDateSelection(date: NgbDate) {
    if (!this.regfromDate && !this.regtoDate) {
      this.regfromDate = date;
    } else if (
      this.regfromDate &&
      !this.regtoDate &&
      date &&
      date.after(this.regfromDate)
    ) {
      this.regtoDate = date;
    } else {
      this.regtoDate = null;
      this.regfromDate = date;
    }
  }

  onAppOpenDateSelection(date: NgbDate) {
    debugger;
    if (!this.appOpenfromDate && !this.appOpentoDate) {
      this.appOpenfromDate = date;
    } else if (
      this.appOpenfromDate &&
      !this.appOpentoDate &&
      date &&
      date.after(this.appOpenfromDate)
    ) {
      this.appOpentoDate = date;
    } else {
      this.appOpentoDate = null;
      this.appOpenfromDate = date;
    }
  }

  isRegDateHovered(date: NgbDate) {
    return (
      this.regfromDate &&
      !this.regtoDate &&
      this.reghoveredDate &&
      date.after(this.regfromDate) &&
      date.before(this.reghoveredDate)
    );
  }

  isAppOpenDateHovered(date: NgbDate) {
    debugger;
    return (
      this.appOpenfromDate &&
      !this.appOpentoDate &&
      this.appOpenhoveredDate &&
      date.after(this.appOpenfromDate) &&
      date.before(this.appOpenhoveredDate)
    );
  }

  isRegDateInside(date: NgbDate) {
    return (
      this.regtoDate &&
      date.after(this.regfromDate) &&
      date.before(this.regtoDate)
    );
  }
  isAppOpenDateInside(date: NgbDate) {
    return (
      this.appOpentoDate &&
      date.after(this.appOpenfromDate) &&
      date.before(this.appOpentoDate)
    );
  }

  isRegDateRange(date: NgbDate) {
    return (
      date.equals(this.regfromDate) ||
      (this.regtoDate && date.equals(this.regtoDate)) ||
      this.isRegDateInside(date) ||
      this.isRegDateHovered(date)
    );
  }

  isAppOpenDateRange(date: NgbDate) {
    return (
      date.equals(this.appOpenfromDate) ||
      (this.appOpentoDate && date.equals(this.appOpentoDate)) ||
      this.isAppOpenDateInside(date) ||
      this.isAppOpenDateHovered(date)
    );
  }

  validateRegDateInput(
    currentValue: NgbDate | null,
    input: string
  ): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }

  validateAppOpenDateInput(
    currentValue: NgbDate | null,
    input: string
  ): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }
}
