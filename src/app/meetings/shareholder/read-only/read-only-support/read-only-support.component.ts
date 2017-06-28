import { Component, OnInit, Input } from '@angular/core';

import { Support } from '../../models/shmeeting';

@Component({
  selector: 'app-read-only-support',
  templateUrl: './read-only-support.component.html',
  styleUrls: ['./read-only-support.component.scss']
})
export class ReadOnlySupportComponent implements OnInit {
  @Input('supportList') supportList: Support[];
  constructor() { }

  ngOnInit() {
  }

}
