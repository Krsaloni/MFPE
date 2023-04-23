import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extension-request-list',
  templateUrl: './extension-request-list.component.html',
  styleUrls: ['./extension-request-list.component.css']
})
export class ExtensionRequestListComponent implements OnInit {

  requests: Request[] = [];

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit(): void {
    this.getRequests();
  }

  private getRequests() {
    this.requestService.getRequestList().subscribe(data => {
      this.requests = data;
    });
  }

  viewdetails(requestId: number) {
    this.router.navigate(['respondextension', requestId]);
  }
}

