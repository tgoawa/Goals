import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../goal';

@Component({
  selector: 'app-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.scss']
})
export class NotesItemComponent implements OnInit {
  @Input('noteItems') noteItems: FormArray;
  @Input('noteItem') noteItem: Note;

  noteItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.noteItemForm = this.toFormGroup(this.noteItem);
    this.noteItems.push(this.noteItemForm);
  }

  private toFormGroup(data: Note) {
    const formGroup = this.fb.group({
      NoteId: data.NoteId,
      GoalId: data.GoalId,
      Note: data.Note,
    });

    return formGroup;
  }
}
