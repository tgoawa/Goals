import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';

import { Note } from '../../models/shmeeting';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  @Input('noteItems') noteItems: FormArray;
  @Input('noteItem') noteItem: Note;

  noteItemForm: FormGroup;

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.noteItemForm = this.toFormGroup(this.noteItem);
    this.replaceBreakTags();
    this.noteItems.push(this.noteItemForm);
  }

  private toFormGroup(data: Note) {
    const formGroup = this.fb.group({
      ShareHolderMeetingNoteId: data.ShareHolderMeetingNoteId,
      ShareHolderMeetingId: data.ShareHolderMeetingId,
      Note: data.Note,
      DisplayDateCreated: data.DisplayDateCreated,
      DisplayDateModified: data.DisplayDateModified,
      DisplayDateDue: {formatted: data.DisplayDateDue}
    });

    return formGroup;
  }

    replaceBreakTags() {
    if (this.noteItem.Note !== null) {
      this.noteItemForm.patchValue({
        Note: this.noteItem.Note.split('<br>').join('\n')
      });
    }
  }

}
