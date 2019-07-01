import { Component, OnInit } from '@angular/core';
import{ DataserviceService} from '../dataservice.service';
import { MatTableDataSource,MatDialog,MatDialogRef} from '@angular/material';
import { CreateComponent } from '../create/create.component';
// import { ActivatedRoute } from "@angular/router";

export interface Role {
  roleId: number;
  roleName: string;
}

export interface Doctor {
  contactNo: string;
  drSegmentId: string;
  firstname: string;
  isactive: number;
  lastname: string;
  login: string;
  roles: Role[];
  userId: number;
}

export interface Service {
  deptId: number;
  deptName: string;
  endToken: number;
  floorId: number;
  floorName: string;
  npEarlyCheckin: number;
  npLateCheckin: number;
  orgId: number;
  serviceArName: string;
  serviceColor: string;
  serviceEngName: string;
  serviceId: number;
  servicePrefix: string;
  serviceType: number;
  startToken: number;
  status: number;
}

export interface Department {
  deptArbName: string;
  deptId: number;
  deptName: string;
  deptType: number;
  dept_Multiple_Token: number;
  doctors: Doctor[];
  floorId: number;
  orgId: number;
  services: Service[];
  status: number;
}

export interface Floor {
  
  floorArbName: string;
 
  floorName: string;
  orgId: number;
}

export interface RootObject {
  floors: Floor[];
}

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  users:Floor[];
  datasource;

  constructor(private dialog:MatDialog,private dataservice:DataserviceService) { 
  this.getapi();
  }
  getapi(){
    this.dataservice.getdata().subscribe(data=>{
      console.log('data => ',data);
      this.users=data['floors'];
      this.datasource=new MatTableDataSource(this.users)
      console.log(this.users)
    })

  }
  
  displayedColumns:string[]=['floorArbName','floorId','floorName','orgId']

  ngOnInit() {
  }

  create(){
   const dialogRef=this.dialog.open(CreateComponent,{
    width:'250px'
   })
   dialogRef.afterClosed().subscribe(data=>{
    this.dataservice.createdata(data).subscribe(Data=>{console.log(Data)
      this.users=Data['floors'];
      this.datasource=new MatTableDataSource(this.users);
      this.getapi();
    })
   })
  }

}
