import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NewClass, NewStudent, UpdateClass } from './class';

@Injectable({
  providedIn: 'root'
})
export class NewClassService {
  classUrl = 'http://apidemo.azidev.com/api/class';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getNewClass(): Observable<NewClass[]> {
    return this.http.get<NewClass[]>(this.classUrl).pipe(
    );
  }

  //get all student of class
  getNewStudent(id: number): Observable<NewClass> {
    return this.http.get<NewClass>(`${this.classUrl}/${id}`)
  }

  getClass(id: number): Observable<any> {
    return this.http.get(`${this.classUrl}/${id}`);
  }
  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.classUrl}/${id}`);
  }
  /** POST: add a new hero to the server */
  addClass(newclass: NewClass): Observable<NewClass> {
    return this.http.post<NewClass>(this.classUrl, newclass);
  }

  /** DELETE: delete the hero from the server */
  deleteClass(id: number): Observable<NewClass> {
    return this.http.delete<NewClass>(`${this.classUrl}/${id}`)
  }

  /** PUT: update the hero on the server */
  updateClass(updateClass: UpdateClass): Observable<UpdateClass> {
    return this.http.put<UpdateClass>(`${this.classUrl}`, updateClass);
  };


  /** POST: add a new hero to the server */
  addStudent(student: NewStudent): Observable<NewClass> {
    return this.http.post<NewClass>(`${this.classUrl}`, student);
  }

  /** DELETE: delete the hero from the server */
  deleteStudent(id: number): Observable<NewStudent> {
    return this.http.delete<NewStudent>(`${this.classUrl}/${id}`)
  }

}
