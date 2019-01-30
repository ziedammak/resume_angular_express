import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  id : any 
  props : any;
  Data :any;
  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    var retrievedObject = localStorage.getItem('datasource');
    var  datasource= JSON.parse(retrievedObject) 
    this.props = this.route
      .params
      .subscribe((data) => {console.log(data.id);this.id = data['id'];
      for(var stage of datasource.stages){
        if(stage.id===data.id){
          this.Data = stage
        }
      }
    }
    );

      
      console.log(this.Data);
  }
 ngOnDestroy() {
    this.props.unsubscribe(); 
  }

}
