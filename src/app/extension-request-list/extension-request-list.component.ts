import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Extensionrequests } from '../extensionrequests';
import { ExtensionrequestsService } from '../extensionrequests.service';

@Component({
  selector: 'app-extension-request-list',
  templateUrl: './extension-request-list.component.html',
  styleUrls: ['./extension-request-list.component.css']
})
export class ExtensionRequestListComponent {
  extensionrequests: Extensionrequests[] = [];

  constructor(private extensionRequestsService: ExtensionrequestsService,
    private router: Router) { }

  // ngOnInit() {
  //   this.extensionRequestsService.getExtensionrequests()
  //     .subscribe((requests: Extensionrequests[]) => this.extensionrequests = requests);
  // }
}

