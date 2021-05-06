import { Subscription } from 'rxjs';
import { NewClass, NewStudent, UpdateClass } from './../class';
import { NewClassService } from './../new-class.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.css']
})
export class ViewClassComponent implements OnInit {

  public id: number;
  public index: number;
  public name_class: string;
  listSudent: NewStudent[];
  listClass: NewClass[];
  public subscription: Subscription;

  constructor(private newStudentService: NewClassService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getNewStudent(this.id);
  }

  getNewStudent(id: number) {
    this.newStudentService.getNewStudent(id).subscribe(data => {
      this.listSudent = data.students;
    })
    this.subscription = this.newStudentService.getNewClass().subscribe(data => {
      this.listClass = data
      for (let i = 0; i < this.listClass.length; i++) {
        if (this.id == this.listClass[i].id) {
          this.index = i;
        }
      }
      this.name_class = this.listClass[this.index].name;
    })
  }
  add(name: string): void {
    const reqData: UpdateClass = {
      id: this.id,
      name: this.name_class,
      students: [{
        id: -1,
        name: name,
        class_id: this.id
      }],
      DeletedStudents: []
    }
    this.subscription = this.newStudentService.updateClass(reqData).subscribe(() =>
      this.getNewStudent(this.id)
    )
  }

  deleteStudents(id: number): void {
    const reqData: UpdateClass = {
      id: this.id,
      name: this.name_class,
      students: [],
      DeletedStudents: [{
        id: id
      }]
    }
    this.subscription = this.newStudentService.updateClass(reqData).subscribe(() =>
      this.getNewStudent(this.id)
    )
  }

  goBack(): void {
    this.location.back();
  }

}
