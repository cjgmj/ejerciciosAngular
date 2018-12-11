import { Component } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent {
  // Doughnut
  public doughnutChartLabels: string[] = ['Series A', 'Series B', 'Series C'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize() {
    const data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.doughnutChartData = data;
  }
}
