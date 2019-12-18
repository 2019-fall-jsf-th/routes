import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  name : string;

  constructor(private aRoute: ActivatedRoute) {
    this.name = this.getCatName();
  }

  ngOnInit() {
  }

  getCatName(): string {
    return this.aRoute.snapshot.params.name;
  }

}
