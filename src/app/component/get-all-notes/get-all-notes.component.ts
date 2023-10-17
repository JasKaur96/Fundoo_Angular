import { Component } from '@angular/core';
import { NotesService } from 'src/services/notes/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent {
  allNotes!: any;
  constructor(private notesService: NotesService) {}

  receiveData(data: any) {
    this.allNotes = [...this.allNotes, data];
  }

  ngOnInit() {
    this.notesService.getAllNotes().subscribe((response: any) => {
      console.log('res', response.data.data);

      this.allNotes = response.data.data;
    });
    // this.receiveMessage();
  }
}
