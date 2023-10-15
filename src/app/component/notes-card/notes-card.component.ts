import { Component } from '@angular/core';
import { NotesService } from 'src/services/notes/notes.service';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.scss'],
})
export class NotesCardComponent {
  allNotes!: any;
  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notesService.getAllNotes().subscribe((response: any) => {
      console.log('res', response.data.data);
      this.allNotes = response.data.data;
    });
  }
}
