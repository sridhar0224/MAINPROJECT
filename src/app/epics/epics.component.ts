import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ProjectComponent} from '../project/project.component';
import {ProjectService} from '../project.service'
import {MatListItem} from '@angular/material/list';
import {MatToolbar} from '@angular/material/toolbar';
import { FormGroup,FormBuilder,FormArray,Validator } from '@angular/forms';
import {ConfirmationdialogComponent} from '../confirmationdialog/confirmationdialog.component'
import {  MatDialogRef, MatDialog, MAT_DIALOG_DATA ,MatDialogModule} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
@Component({
  selector: 'app-epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.scss']
})
export class EpicsComponent implements OnInit {

  @ViewChild(MatExpansionPanel) pannel?: MatExpansionPanel; 
  @ViewChild(MatAccordion) accordion?: MatAccordion;
  Epices:any;
  xpandStatus=true;
  constructor
  (
        public ProjectService:ProjectService,
        public builder: FormBuilder,
        private router: Router,
        private http: HttpClient,
  )
  {

    this.Epices=[];
   }

  ngOnInit(): void {
    
    this.ProjectService.fetchproject();
  }
  onAddEpic(id:number): void {
    debugger;
     this.ProjectService.projectss.forEach((p,i)=>{
       if(p.id==id){
         debugger
         p.Epices.push({name:"",priority:""})
       }
     })
    }

      onDeleteEpic(index: number,proId:number): void {
        this.ProjectService.projectss.forEach((element,i )=> {
          if(element.id==proId){
            debugger
            element.Epices.splice(index,1);
          }
        });
      }

      onSave() {
        this.closePannel();
        this.ProjectService.projectss.forEach((p,i)=>{
          p.Epices.forEach((epi,j)=>{
            debugger
            if(epi["name"]=="") 
            this.ProjectService.projectss[i].Epices.splice(j,1);
           })
        })
        this.ProjectService.EpicsSave(this.ProjectService.projectss);  
         
        }

        closePannel() { // for expansion panel only
          if(!this.pannel) { return }
          this.pannel.close();
        }
      
        closeAll() { // for all panels in accordion
          if(!this.accordion) { return }
          this.accordion.closeAll();
        }




}
