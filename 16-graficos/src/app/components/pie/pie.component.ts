import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styles: []
})
export class PieComponent {
    // pieChart
    public pieChartLabels: string[] = ['Series A', 'Series B', 'Series C'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType = 'pie';

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

      this.pieChartData = data;
    }
}
