import { Component, OnInit, Input } from '@angular/core';
import { Detail } from '../../models/shmeeting';

@Component({
  selector: 'app-read-only-detail',
  templateUrl: './read-only-detail.component.html',
  styleUrls: ['./read-only-detail.component.scss']
})
export class ReadOnlyDetailComponent implements OnInit {
  @Input('detail') detail: Detail;
  constructor() { }

  ngOnInit() {
  }

}
