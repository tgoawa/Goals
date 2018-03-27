import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Item, Categories } from '../../models/hours';

export class ChartData {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}

@Component({
  selector: 'app-charge-time',
  templateUrl: './charge-time.component.html',
  styleUrls: ['./charge-time.component.scss']
})
export class ChargeTimeComponent implements OnInit, OnChanges {
  @Input('data') data: Item[];
  @Input('category') category: Categories;
  @Input('industryTeams') industryTeams: string[];
  @Output('isDirty') isDirty: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('totalNewHours') totalNewHours: EventEmitter<number> = new EventEmitter<number>();

  categoryName: string;
  colorScheme = {
    domain: ['#007EBA', '#5FBB46', '#F7941E', '#7F3F98', '#00AFED', '#CBDB2A', '#FFC60B', '#ED0D6C']
  };
  view: any[] = [700, 300];
  estimatedPieData: ChartData[] = [];
  rollingPieData: ChartData[] = [];
  previousTotalHours = 0;
  previousTotalPercent = 0;
  newTotalHours = 0;
  newTotalPercent = 0;
  constructor() { }

  ngOnInit() {
    this.categoryName = this.category.CategoryName;
    this.calculatePreviousTotals();
    this.calculateNewTotals();
    this.mapPieChartDataSet();
  }

  ngOnChanges() {
    this.calculateNewTotals();
  }

  calculatePreviousTotals() {
    this.calculatePreviousTotalHours();
    this.calculatePreviousTotalPercent();
  }

  calculatePreviousTotalHours() {
    for (let index = 0; index < this.data.length; index++) {
      this.previousTotalHours = this.previousTotalHours + this.data[index].ActualHours;
    }
  }

  calculatePreviousTotalPercent() {
    if (this.previousTotalHours > 0) {
      this.previousTotalPercent = this.previousTotalHours / this.previousTotalHours;
    } else {
      this.previousTotalPercent = 0;
    }
  }

  calculateNewTotals() {
    this.calculateNewTotalHours();
    this.calculateNewTotalPercent();
  }

  onUpdateHours() {
    this.isDirty.emit(true);
    this.calculateNewTotalHours();
    this.calculateNewTotalPercent();

  }
  calculateNewTotalHours() {
    this.newTotalHours = 0;
    for (let index = 0; index < this.data.length; index++) {
      this.newTotalHours = this.newTotalHours + this.data[index].EstimatedHours;
    }
    this.totalNewHours.emit(this.newTotalHours);
  }

  calculateNewTotalPercent() {
    if (this.newTotalHours > 0) {
      this.newTotalPercent = this.newTotalHours / this.newTotalHours;
    } else {
      this.newTotalPercent = 0;
    }
  }

  private mapPieChartDataSet() {
    for (let x = 0; x < this.data.length; x++) {
      this.estimatedPieData.push(new ChartData(this.getItemName(this.data[x].ItemId), this.data[x].EstimatedHours));
      // replace next line with rolling data
      this.rollingPieData.push(new ChartData(this.getItemName(this.data[x].ItemId), this.data[x].ActualHours));
    }
  }

  private getItemName(itemId: number) {
    for (let x = 0; x < this.category.Items.length; x++) {
      if (itemId === this.category.Items[x].ItemId) {
        return this.category.Items[x].ItemName;
      }
    }
  }
}
