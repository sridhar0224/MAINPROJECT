import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project-service.service';
import {AddProjectComponent} from './add-project/add-project.component'
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';


describe('ProjectServiceService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created project ', () => {
    const actualq: any =service.addproject('aaa','01-DEC-20','31-DEC-20');
    const excet:any=['aaa','01-DEC-20','31-DEC-20',[]];
    expect(actualq).toEqual(excet);
  });
  
});
