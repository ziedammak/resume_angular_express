import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    id : any ;
    name : any ;
    birthday : any ;
    work : any ;
    skills:any ; 
    
    constructor(private route: ActivatedRoute) {
      
    }
  
    ngOnInit() {
      var retrievedObject = localStorage.getItem('datasource');
     var  datasource= JSON.parse(retrievedObject) ; 
     console.log(datasource);
     this.id = datasource['id'];
     this.name=datasource['name'];
     this.birthday=datasource['birthday'];
     this.work = datasource['work'];
     this.skills=datasource['skills']
        
    }
   ngOnDestroy() {
    }
  
  }
  