import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  name = "No name was entered";

  constructor(private activatedRoute: ActivatedRoute) {

    this.name = this.getCatName();
  }

  getCatName(): string {
    if (this.activatedRoute.snapshot.params.name == null) {
      return this.name;
    }
    return this.activatedRoute.snapshot.params.name;
  }
    // getcatName() {
    //   let catName = "";
    //   let tempId = this.activatedRoute.paramMap.subscribe(
    //     parameters => {
    //       if(parameters.has('catName')) {
    //         catName = parameters.get('catName');
    //       } else {

    //       }
    //     }
    //     , error => {
    //       console.error(error);
    //     }
    //   );
    //   return catName;

    // }

   

  ngOnInit() {
  }

}
