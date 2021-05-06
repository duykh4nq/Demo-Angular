import { UpdateClass, NewStudent } from './../class';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NewClass } from '../class';
import { NewClassService } from '../new-class.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent {
  newStudent: NewStudent[];
  title = 'Students'
  public name_class: string;
  public id: number;
  public index: number;
  public class_id: number;
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
      this.class_id = Number(params.get('classId'));
      this.subscription = this.classService.getClass(this.class_id).subscribe((data: NewClass) => {
        this.newStudent = data.students;
        for (let i = 0; i < this.newStudent.length; i++) {
          if (this.id == this.newStudent[i].id) {
            this.index = i;
          }
        }
        this.name_class = data.name;
      })
    })
  }

  goBack(): void {
    this.location.back();
  }
  save(name: string): void {
    const reqData: UpdateClass = {
      id: this.class_id,
      name: this.name_class,
      students: [{
        id: this.id,
        name: name,
        class_id: this.class_id
      }],
      DeletedStudents: []
    }
    this.subscription = this.classService.updateClass(reqData).subscribe(() => this.goBack())
  }

}
