import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EpicsServiceService } from './epics-service.service';

describe('EpicsServiceService', () => {
  let service: EpicsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpicsServiceService);
  });

  it('should be created', () => {
    const actualq: any =service.addproject('aaa','01-DEC-20','31-DEC-20');
    const excet:any=['aaa','01-DEC-20','31-DEC-20'];
    expect(actualq).toEqual(excet);
  });
});
