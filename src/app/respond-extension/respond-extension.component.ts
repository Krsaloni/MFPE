import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../request';

@Component({
  selector: 'app-respond-extension',
  templateUrl: './respond-extension.component.html',
  styleUrls: ['./respond-extension.component.css']
})
export class RespondExtensionComponent implements OnInit {

  requestId: number;
  // emisId: number;
  // customerId: number;
  // loanPlanId: number;
  // reason: String;
  // requestRaisedOn: Date;
  // etaPaymentDate: Date;
  // requestStatus: String;

  request: Request = new Request();
  constructor(private route: ActivatedRoute, private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.params['requestId'];
    this.request = new Request();
    this.requestService.getRequestById(this.requestId).subscribe(data => {
      this.request = data;
    });
  }


}
