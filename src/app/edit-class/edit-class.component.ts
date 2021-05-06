import { UpdateClass } from './../class';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NewClass } from '../class';
import { NewClassService } from '../new-class.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent {
  newClass: NewClass;
  title = 'Class'
  public id: number;
  public subscriptionParams: Subscription;
  public subscription: Subscription;

  constructor(private activeRouterService: ActivatedRoute,
    private classService: NewClassService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.subscriptionParams = this.activeRouterService.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.subscription = this.classService.getClass(this.id).subscribe((data: NewClass) => {
        this.newClass = data;
      })
    })
  }

  goBack(): void {
    this.location.back();
  }
  save(name: string): void {
    const reqData: UpdateClass = {
      id: this.id,
      name: name,
      students: [],
      DeletedStudents: []
    }
    this.subscription = this.classService.updateClass(reqData).subscribe(() => this.goBack())
  }

}
