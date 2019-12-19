import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  name = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.name = this.getName();
  }

  ngOnInit() {
    
  }

  getName(): string {
    return this.route.snapshot.params.name;
  }

}
