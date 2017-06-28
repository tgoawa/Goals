import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Note } from '../../models/shmeeting';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  @Input('parentMeetingForm') parentMeetingForm: FormGroup;
  @Input('Notes') Notes: Note[];
  @Input('meetingId') meetingId: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parentMeetingForm.addControl('Notes', new FormArray([]));
  }

  addNote() {
    const note: Note = {
      ShareHolderMeetingNoteId: 0,
      ShareHolderMeetingId: this.meetingId,
      Note: '',
      DisplayDateCreated: '',
      DisplayDateModified: '',
      DisplayDateDue: ''
    };

    this.Notes.push(note);
    this.cd.detectChanges();
    return false;
  }

  removeSupport(index: number) {
    if (this.Notes.length > 1) {
      this.Notes.splice(index, 1);
      (<FormArray>this.parentMeetingForm.get('Notes')).removeAt(index);
    }
    return false;
  }
}
