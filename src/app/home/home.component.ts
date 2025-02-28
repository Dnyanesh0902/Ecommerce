import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component'
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  pro: any = [];
  isReadonly = true;
  max = 5;
  rate = 4;
  constructor(public ds:DataService) {
    
  }
  ngOnInit(): void {
    this.ds.getData().subscribe((d:any) => {
      this.pro = d.products;
    })
  }
}