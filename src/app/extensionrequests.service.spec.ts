import { TestBed } from '@angular/core/testing';

import { ExtensionrequestsService } from './extensionrequests.service';

describe('ExtensionrequestsService', () => {
  let service: ExtensionrequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtensionrequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
