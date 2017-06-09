import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Note } from '../../goal';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  @Input('parentGoalForm') parentGoalForm: FormGroup;
  @Input('notes') Notes: Note[];
  @Input('goalId') goalId: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parentGoalForm.addControl('Notes', new FormArray([]));
  }

  addNote() {
    const note: Note = {
      NoteId: 0,
      GoalId: this.goalId,
      Note: '',
      DisplayDateCreated: '',
      DisplayDateModified: '',
      IsDirty: false
    };

    this.Notes.push(note);
    this.cd.detectChanges();
    return false;
  }

  removeNote(index: number) {
    if (this.Notes.length > 1) {
      this.Notes.splice(index, 1);
      (<FormArray>this.parentGoalForm.get('Notes')).removeAt(index);
    }
    return false;
  }
}
