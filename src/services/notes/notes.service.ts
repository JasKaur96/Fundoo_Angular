import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private httpService: HttpService) {}

  addnote = (data: {}) => {
    console.log('ser', data);
    return this.httpService.postService('/notes/addNotes', data);
  };

  getAllNotes = () => {
    return this.httpService.getService('/notes/getNotesList');
  };
}
