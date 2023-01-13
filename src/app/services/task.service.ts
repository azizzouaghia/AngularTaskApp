import { Injectable } from '@angular/core';
import { task } from 'src/app/task';
import {Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }
  
  getTasks(): Observable<task[]> {
    return this.http.get<task[]>(this.apiUrl);
  }
  DeleteTask(task: task): Observable<task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<task>(url);
  }
  UpdateReminder(task:task): Observable<task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<task>(url,task,httpOptions)
  }
  addTask(task:task): Observable<task>{
    return this.http.post<task>(this.apiUrl,task,httpOptions)
  }
}
