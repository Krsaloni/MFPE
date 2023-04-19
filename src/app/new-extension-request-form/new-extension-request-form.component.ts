import { Component, OnInit } from '@angular/core';
// import { Extensionrequests } from '../extensionrequests';
// import { ExtensionrequestsService } from '../extensionrequests.service';


@Component({
  selector: 'app-new-extension-request-form',
  templateUrl: './new-extension-request-form.component.html',
  styleUrls: ['./new-extension-request-form.component.css']
})
export class NewExtensionRequestFormComponent {

  // extensionrequest: Extensionrequests = new Extensionrequests();

  // Extensionrequests = {
  //   requestId: null,
  //   emisId: null,
  //   customerId: null,
  //   loanPlanId: null,
  //   extensionReasonsId: null,
  //   otherReason: '',
  //   requestRaisedOn: '',
  //   etaPaymentDate: '',
  //   requestStatus: ''
  // };

  isSubmitted = false;
  // constructor(private ExtensionrequestsService: ExtensionrequestsService) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  onSubmit() {

    // const emisIdInput = document.getElementById('emisid') as HTMLInputElement;
    // this.Extensionrequests.emisId = emisIdInput.value;
    // const customerIdInput = document.getElementById('customerid') as HTMLInputElement;
    // this.Extensionrequests.customerId = customerIdInput.value;
    // const loanPlanIdInput = document.getElementById('loanplanid') as HTMLInputElement;
    // this.Extensionrequests.loanPlanId = loanPlanIdInput.value;
    // const requestRaisedOnInput = document.getElementById('requestRaisedOn') as HTMLInputElement;
    // this.Extensionrequests.requestRaisedOn = requestRaisedOnInput.value;
    // const etaPaymentDateInput = document.getElementById('etaPaymentDate') as HTMLInputElement;
    // this.Extensionrequests.etaPaymentDate = etaPaymentDateInput.value;

    // this.ExtensionrequestsService.updateFormData(this.Extensionrequests);
    // Handle form submission here
    // If the submission is successful, set isSubmitted to true

    this.isSubmitted = true;
    if (this.isSubmitted) {
      alert("Your request has been successfully submitted!");
    }
  }
}
