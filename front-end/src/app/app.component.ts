import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './services/navbar.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title=  'CV';
  restItems: any;
  restItemsUrl ='http://localhost:3000';
  
  links: Array<{ text: string, path: string }>;
  constructor(private http: HttpClient,private router: Router, private navbarService: NavbarService) {
  }

  ngOnInit() {
    this.getRestItems();
    this.links = this.navbarService.getLinks();  }
  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          localStorage.setItem('datasource', JSON.stringify(restItems));
          //console.log(localStorage.datasource);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

  }
