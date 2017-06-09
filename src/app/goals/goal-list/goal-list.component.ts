import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {
  @Input('goals') goals: Goal[];
  @Output() goalToEdit: EventEmitter<Goal> = new EventEmitter<Goal>();
  constructor() { }

  ngOnInit() {
  }

  onEdit(goal: Goal) {
    this.goalToEdit.emit(goal);
  }
}
