import { Component } from '@angular/core';
import { NotesService } from 'src/services/notes/notes.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss'],
})
export class ArchiveNotesComponent {
  archivedNotes!: any;
  constructor(private notesService: NotesService) {}

  ngOnInit() {
    console.log('archive');
    this.notesService.getArchivedlNotes().subscribe((response: any) => {
      console.log('res', response.data.data);

      this.archivedNotes = response.data.data;
    });
    // this.receiveMessage();
  }
}
