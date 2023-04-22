import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-extension-request-list',
  templateUrl: './extension-request-list.component.html',
  styleUrls: ['./extension-request-list.component.css']
})
export class ExtensionRequestListComponent implements OnInit {

  requests: Request[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(): void {
    this.requestService.getRequestList().subscribe(data => {
      this.requests = data;
    });
  }

}

