import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  name : string;

  constructor(private actRoute: ActivatedRoute) {

    this.name = this.catName();

  }

  ngOnInit() {
  }

  catName(): string {
    return this.actRoute.snapshot.params.name;
  }

}
