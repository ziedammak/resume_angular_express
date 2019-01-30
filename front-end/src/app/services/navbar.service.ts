import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private links = new Array<{ text: string, path: string, data : any }>();
  private isLoggedIn = new Subject<boolean>();

  constructor() {
    var retrievedObject = localStorage.getItem('datasource');
    var  datasource= JSON.parse(retrievedObject) ; 
    console.log(datasource);
    for(var stage of datasource.stages){
      this.addItem({text: stage.name, path: 'Stage/'+stage.id,data:{name : stage.name ,project_name:stage.project_name, description : stage.description,technologies:stage.technologies}});
    }
    this.isLoggedIn.next(false);
  }

  getLinks() {
    return this.links;
  }

  addItem({ text, path ,data }) {
    this.links.push({ text: text, path: path ,data :data});
  }

  removeItem({ text }) {
    this.links.forEach((link, index) => {
      if (link.text === text) {
        this.links.splice(index, 1);
      }
    });
  }

  clearAllItems() {
    this.links.length = 0;
  }
}
