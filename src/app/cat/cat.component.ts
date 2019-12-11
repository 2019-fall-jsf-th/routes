import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  get catName() {
    let catName = '';

    let dTmpId = this.activatedRoute.paramMap.subscribe(
      params => {

        if (params.has('catName')) {
          catName = params.get('catName');
        } else {
        }

      }
      , error => {
        console.error(error);
      }
    );
    return catName;
  }

  ngOnInit() {
    console.log(this.catName);
  }


}
