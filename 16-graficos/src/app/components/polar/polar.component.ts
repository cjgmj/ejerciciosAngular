import { Component } from '@angular/core';

@Component({
  selector: 'app-polar',
  templateUrl: './polar.component.html',
  styles: []
})
export class PolarComponent {
  // polarChart
  public polarAreaChartLabels: string[] = ['Series A', 'Series B', 'Series C'];
  public polarAreaChartData: number[] = [300, 500, 100];
  public polarAreaLegend = true;

  public polarAreaChartType = 'polarArea';

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

    this.polarAreaChartData = data;
  }
}
