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
  @Input('notes') notes: Note[];
  @Input('goalId') goalId: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parentGoalForm.addControl('notes', new FormArray([]));
  }

  addNote() {
    const note: Note = {
      NoteId: 0,
      GoalId: this.goalId,
      Note: '',
      DisplayDateCreated: '',
      DisplayDateModified: '',
    };

    this.notes.push(note);
    this.cd.detectChanges();
  }

  removeNote(index: number) {
    if (this.notes.length > 1) {
      this.notes.splice(index, 1);
      (<FormArray>this.parentGoalForm.get('notes')).removeAt(index);
    }
  }
}
