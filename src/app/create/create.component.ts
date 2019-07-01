import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Floor } from '../get/get.component';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
 createform:FormGroup;
  constructor(public dialogRef:MatDialogRef<CreateComponent>,
private fg:FormBuilder) { 
      this.createform=this.fg.group({
        floorArbName:['',[Validators.required]],
        floorId:['',[Validators.required]],
        floorName:['',[Validators.required]],
        orgId:['',[Validators.required]]
      })
    }
    onclick(){
      this.dialogRef.close();
    } 

  ngOnInit() {
  }
}
