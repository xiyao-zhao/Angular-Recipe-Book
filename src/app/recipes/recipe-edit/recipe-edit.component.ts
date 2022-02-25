import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number;
    editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.paramMap
        .subscribe((params) => {
            this.id = +params.get('id');
            this.editMode = params.get('id') != null;
        })
  }
}
