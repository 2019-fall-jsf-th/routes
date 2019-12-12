import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(route: ActivatedRoute) {

   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.name = this.service.getName(id);

  }

}
