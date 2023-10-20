import { Component } from '@angular/core';
import { NotesService } from 'src/services/notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss'],
})
export class TrashComponent {
  trashedNotes!: any;
  constructor(private notesService: NotesService) {}

  disaplayAllNotes() {
    this.notesService.getTrashedNotes().subscribe((response: any) => {
      this.trashedNotes = response.data.data;
    });
  }

  ngOnInit() {
    this.disaplayAllNotes();
  }
}
