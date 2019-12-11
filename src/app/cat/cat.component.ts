import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  name = "Don't gots a name";
  // dependency inject (DI) the ActivatedRoute into the cat component
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // let name = this.activatedRoute.snapshot.paramMap.get('name');
  }

  // create readonly (getter) property that looks up the name passed on the route - use Snapshot method in Angular docs
  get(name) {
    return this.activatedRoute.snapshot.params.name;
  }
}
