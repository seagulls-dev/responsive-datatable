import { Component, OnInit } from '@angular/core';

// Interfaces
import { Column } from './../column.type';
// Services
import { GeneralService } from './../general.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.scss']
})
export class MainsComponent implements OnInit {

  public dataSource = new MatTableDataSource();


  columns:Column[] = [
    {id:'id',label:'Nr.',hideOrder:0,width : 90},
    {id:'code',label:'Code',hideOrder:1,width : 90},
    {id:'organization',label:'Organization',hideOrder:2,width : 200},
    {id:'surname',label:'Surname',hideOrder:3,width : 100},
    {id:'f_name',label:'First Name',hideOrder:4,width:150},
    {id:'phone',label:'Phone',hideOrder:5,width : 250},
    {id:'email',label:'E-Mail',hideOrder:6,width : 150},
    {id:'zip',label:'Zip',hideOrder:7,width : 80},
    {id:'locality',label:'Locality',hideOrder:8,width : 80},
    {id:'time',label:'Time',hideOrder:9,width : 80},
    {id:'dates',label:'Date',hideOrder:10,width : 80},
    {id:'note',label:'Note',hideOrder:11,width : 160}
  ]

  constructor(private service:GeneralService) { 

  }

  ngOnInit(){

    this.service.getUsers().subscribe( result => {
      
      if(result.length > 0){
        const rows = [];

        result.forEach((element:any,index:number)=> {
          element['recId'] = index +1;
          rows.push(element);
        });

        this.dataSource.data = rows;
      }
    })
    
  }

}
