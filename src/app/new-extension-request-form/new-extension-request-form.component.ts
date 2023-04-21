import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-extension-request-form',
  templateUrl: './new-extension-request-form.component.html',
  styleUrls: ['./new-extension-request-form.component.css']
})
export class NewExtensionRequestFormComponent implements OnInit {
  request: Request = new Request();


  constructor(private requestService: RequestService, private router: Router) { }


  ngOnInit(): void {
  }
  saveRequest() {
    this.requestService.createRequest(this.request).subscribe(data => {
      console.log(data);
    });
    this.goToRequestList();
  }
  goToRequestList() {

    this.router.navigate(['/requests']);

  }
  onSubmit() {
    console.log(this.request);
    this.saveRequest();
  }

}



//   onSubmit() {
//     this.isSubmitted = true;
//     if (this.isSubmitted) {
//       alert("Your request has been successfully submitted!");
//     }
//   }
// }
