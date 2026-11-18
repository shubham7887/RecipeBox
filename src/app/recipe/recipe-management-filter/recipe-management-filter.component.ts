import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-recipe-management-filter",
  templateUrl: "./recipe-management-filter.component.html",
  styleUrls: ["./recipe-management-filter.component.scss"],
})
export class RecipeManagementFilterComponent implements OnInit {
  
  recipefilterForm!: FormGroup;
  CategoryList!: any;
  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate | null;
  toDate!: NgbDate | null;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {}

  ngOnInit(): void {
    this.recipefilterForm = this.formBuilder.group({
      UserName: [""],
      UserId: [""],
      Email: [""],
      Title: [""],
      Category: [""],
      fromDate: [],
      toDate: [],
    });
  }

  @Output() valueChange = new EventEmitter();

  SearchfilterValue() {
    debugger;
    this.recipefilterForm.patchValue({
      fromDate:
        this.fromDate != null
          ? this.fromDate?.month +
            "/" +
            this.fromDate?.day +
            "/" +
            this.fromDate?.year
          : this.fromDate,
      regtoDate:
        this.toDate != null
          ? this.toDate?.month +
            "/" +
            this.toDate?.day +
            "/" +
            this.toDate?.year
          : this.toDate,
    });
    this.valueChange.emit({ formdata: this.recipefilterForm.value });
  }

  Reset() {
    debugger;
    this.recipefilterForm.reset();
    this.fromDate = null;
    this.toDate = null;
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate &&
      !this.toDate &&
      date &&
      date.after(this.fromDate)
    ) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isDateHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isDateInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isDateRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isDateInside(date) ||
      this.isDateHovered(date)
    );
  }

  validateDateInput(
    currentValue: NgbDate | null,
    input: string
  ): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }
}
