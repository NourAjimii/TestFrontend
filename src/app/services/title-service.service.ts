import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {title} from "../models/title";
import baseUrl from "./helpers.service";

@Injectable({
  providedIn: 'root'
})
export class TitleServiceService {

  constructor(private http: HttpClient) { }

  getAllTitles(){
    return this.http.get<title[]>(`${baseUrl}/title/getAll`);
  }

  postTitle(title:title){
    return this.http.post<title>(`${baseUrl}/title/add`,title);
  }

  updateTitle(id:number,title:title){
    return this.http.put<title>(`${baseUrl}/title/update/${id}`,title);
  }

  deleteTitle(id:number){
    return this.http.delete(`${baseUrl}/title/delete/`+id);
  }

  getTitle(id:number){
    return this.http.get<title>(`${baseUrl}/title/`+id);
  }





}
