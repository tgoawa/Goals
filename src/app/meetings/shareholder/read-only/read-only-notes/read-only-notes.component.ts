import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../models/shmeeting';

@Component({
  selector: 'app-read-only-notes',
  templateUrl: './read-only-notes.component.html',
  styleUrls: ['./read-only-notes.component.scss']
})
export class ReadOnlyNotesComponent implements OnInit {
  @Input('noteList') noteList: Note;
  constructor() { }

  ngOnInit() {
  }

}
