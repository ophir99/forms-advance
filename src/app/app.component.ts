import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "forms-final";
  myF;
  countries = [
    {
      value: "IN",
      label: "INDIA"
    },
    {
      value: "NZ",
      label: "NEW ZEALAND"
    },
    {
      value: "US",
      label: "United States"
    }
  ];
  currentStates = [];
  usState = ["Floridia", "Texas", "New York", "Michigan"];
  indianStates = ["Meghalaya", "Telangana", "Gujarat"];
  newZStates = ["NZ1", "NZ2", "NZ3"];

  constructor(private formB: FormBuilder) {
    this.myF = this.formB.group({
      name: [],
      state: [""],
      country: [""],
      district: []
    });

    this.myF.get("country").valueChanges.subscribe(val => {
      console.log("Changing", val);
      if (val == "IN") {
        this.currentStates = this.indianStates;
        this.myF.get("state").setValue(this.indianStates[0]);
      }
      if (val == "NZ") {
        this.currentStates = this.newZStates;
      }
      if (val == "US") {
        this.currentStates = this.usState;
      }
    });
  }
}
