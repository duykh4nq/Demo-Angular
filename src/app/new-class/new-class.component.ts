import { NewClass } from './../class';
import { NewClassService } from './../new-class.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  listClass: NewClass[];
  public subscription: Subscription;

  constructor(private newClassService: NewClassService) { }

  ngOnInit() {
    this.getNewClass();
  }

  getNewClass(): void {
    this.subscription = this.newClassService.getNewClass().subscribe(data => {
      this.listClass = data
    })
  }

  add(name: string) {
    this.subscription = this.newClassService.addClass({ name } as NewClass).subscribe(data => {
      this.getNewClass();
    })
  }

  deleteClass(id: number): void {
    this.listClass = this.listClass.filter(h => h.id !== id);
    this.newClassService.deleteClass(id).subscribe()
  }

}
