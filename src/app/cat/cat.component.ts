import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})

export class CatComponent implements OnInit {

    name = 'No Name Cat';

    constructor(private aRoute: ActivatedRoute) {

        this.name = this.catName();

        
     }

    ngOnInit() {}

    catName(): string {
        return this.aRoute.snapshot.params.name;
    }

}
